import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import Input from '../../components/Inputs/Input'
import PhotoSelector from '../../components/Inputs/PhotoSelector'

const SignUp = ({ setCurrentPage }) => {
  const [profilePic, setProfilePic] = useState(null)
  const [preview, setPreview] = useState(null)
  const [fullName, setFullName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)

  const handleSignup = e => {
    e.preventDefault()

    if (!profilePic || !fullName || !email || !password) {
      setError('All fields are required')
      return
    }

    // Optional: You can add more validation here
    setError(null)
    toast.success('Account created successfully!')
  }

  return (
    <div className='max-w-md mx-auto p-6 bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]'>
      <div className='mb-6'>
        <h2 className='text-2xl font-bold text-center text-[var(--body-text)] mb-1'>
          Create an Account
        </h2>
        <p className='font-body text-sm text-center mb-4 text-gray-500'>
          Start preparing smarter with QPrepAi
        </p>
      </div>

      <form onSubmit={handleSignup}>
        <PhotoSelector
          image={profilePic}
          setImage={setProfilePic}
          preview={preview}
          setPreview={setPreview}
        />

        <Input
          label='Full Name'
          name='fullName'
          type='text'
          value={fullName}
          onChange={e => setFullName(e.target.value)}
          placeholder='Enter your full name'
        />
        <Input
          label='Email'
          name='email'
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder='Enter your email'
        />
        <Input
          label='Password'
          name='password'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder='Create a strong password'
        />

        {error && <p className='text-red-500 text-sm mb-2'>{error}</p>}

        <button
          type='submit'
          className='w-full mt-4 py-2 bg-gradient-to-r from-[var(--primary-color)] to-[#665fe3] text-white rounded-lg hover:from-[var(--primary-color)] hover:to-[var(--primary-color)] cursor-pointer transition-colors duration-300'
        >
          SignUp
        </button>

        <p className='font-body text-base mt-5'>
          {' '}
          Already have an account?{' '}
          <button
            className='underline text-[var(--primary-color)] cursor-pointer'
            onClick={() => setCurrentPage('login')}
          >
            Login
          </button>
        </p>
      </form>
    </div>
  )
}

export default SignUp
