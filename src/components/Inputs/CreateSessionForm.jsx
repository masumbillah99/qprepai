import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Input from './Input'
import SpinnerLoader from '../Loader/SpinnerLoader'
import toast from 'react-hot-toast'

const CreateSessionForm = ({ setOpenCreateModal }) => {
  const [formData, setFormData] = useState({
    role: '',
    experience: '',
    topicsToFocus: '',
    description: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleChange = (key, value) => {
    setFormData(prevData => ({
      ...prevData,
      [key]: value
    }))
  }

  const handleCreateSession = async evt => {
    evt.preventDefault()

    const { role, experience, topicsToFocus, description } = formData

    if (!role || !experience || !topicsToFocus || !description) {
      setError('Fill all the required fields')
      return
    }

    setError('')

    setIsLoading(true)

    try {
      const aiResponse = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/ai/generate-questions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify({
            role,
            experience,
            topicsToFocus,
            numberofQuestions: 10
          })
        }
      )

      //   console.log(aiResponse)

      if (aiResponse.ok) {
        const data = await aiResponse.json()

        // should be arry like [{question, answer}]
        // console.log('from 62', data)
        const generatedQuestions = data.data

        // console.log('from 66', generatedQuestions)

        //  call api/sessions/create-session for creating session
        const res = await fetch(
          `${import.meta.env.VITE_SERVER_URL}/api/sessions/create`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
              ...formData,
              questions: generatedQuestions
            })
          }
        )

        console.log('from 82', res)
        if (res.ok) {
          const sessionData = await res.json()
          toast.success('Session created successfully!')
          // console.log('from 85', sessionData)
          //   setOpenCreateModal
          navigate(`/interview-prep/${data._id}`)
        }
      } else {
        const errorData = await aiResponse.json()
        setError(errorData.message || 'Failed to create session')
      }
    } catch (err) {
      console.log('from create session form', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='w-[90vw] max-w-full lg:w-[50vw] p-7 flex flex-col justify-center overflow-x-hidden'>
      <h3 className='text-lg font-bold text-black'>
        Start A New Interview Journey
      </h3>
      <p className='font-body text-xs text-gray-600 mb-5 mt-1'>
        Fill out a few quick details and unlock your personalized set of
        interview questiosn
      </p>

      <form onSubmit={handleCreateSession} className=''>
        <Input
          value={formData.role}
          label={'Target Role'}
          type='text'
          placeholder={'e.g. Software Engineer, Web Developer, etc.'}
          onChange={({ target }) => handleChange('role', target.value)}
        />

        <Input
          value={formData.experience}
          label={'Years of Experience'}
          type='number'
          placeholder={'e.g. 1 year, 2 years, etc.'}
          onChange={({ target }) => handleChange('experience', target.value)}
        />

        <Input
          value={formData.topicsToFocus}
          label={'Topics to Focus'}
          type='text'
          placeholder={'Comma-separated, e.g., Python, Java, Javascript, etc.'}
          onChange={({ target }) => handleChange('topicsToFocus', target.value)}
        />

        <Input
          value={formData.description}
          label={'Description'}
          type='text'
          placeholder={'Briefly describe your goals and expectations'}
          onChange={({ target }) => handleChange('description', target.value)}
        />

        {error && <p className='text-red-500 text-sm'>{error}</p>}

        <button
          type='submit'
          className='btn-primary w-full mt-4'
          disabled={isLoading}
        >
          {isLoading && <SpinnerLoader />} Create Session
        </button>
      </form>
    </div>
  )
}

export default CreateSessionForm
