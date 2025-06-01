import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { AnimationPresence, motion } from 'framer-motion'
import { AnimatePresence, motion } from 'framer-motion'
import { LuCircleAlert, LuListCollapse } from 'react-icons/lu'
import SpinnerLoader from '../../components/Loader/SpinnerLoader'
import toast from 'react-hot-toast'
import DashboardLayout from '../../layout/DashboardLayout'
import RoleInfoHeader from '../../components/InterviewPrep/RoleInfoHeader'
import QuestionCard from '../../components/Card/QuestionCard'

const InterviewPrep = () => {
  const { sessionId } = useParams()
  const [sessionData, setSessionData] = useState(null)
  const [questionsData, setQuestionsData] = useState([])
  const [openLearnMoreDrawer, setOpenLearnMoreDrawer] = useState(false)
  const [explanation, setExplanation] = useState(null)
  const [errorMsg, setErrorMsg] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isUpdateLoader, setIsUpdateLoader] = useState(false)

  // fetch session data by session id
  const fetchSessionDataById = async () => {
    setIsLoading(true)

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/sessions/${sessionId}`,
        { credentials: 'include' }
      )
      if (response.ok) {
        const data = await response.json()
        // console.log('session data', data)
        setSessionData(data?.session)
        setQuestionsData(data?.questions)
      } else {
        toast.error('Failed to fetch session data')
      }
    } catch (error) {
      console.error('Error fetching session data:', error)
      toast.error('An error occurred while fetching session data')
    } finally {
      setIsLoading(false)
    }
  }

  // generate concept explanation
  const generateConceptExplanation = async question => {}

  // pin questions

  // add more questions to a session

  // call useeffect to fetch session data by id
  useEffect(() => {
    if (sessionId) {
      fetchSessionDataById()
    }

    return () => {}
  }, [])

  return (
    <DashboardLayout>
      <RoleInfoHeader
        role={sessionData?.role || ''}
        topicsToFocus={sessionData?.topicsToFocus || ''}
        experience={sessionData?.experience || ''}
        description={sessionData?.description || ''}
        questions={sessionData?.questions?.length || '-'}
      />

      {/* Q & A */}
      <div className='container mx-auto py-4 px-5 mt-10'>
        <h2 className='text-xl text-black font-semibold'>
          Interview Questions and Answer
        </h2>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 mt-5 mb-10'>
          <div
            className={`col-span-12 
                // ${openLearnMoreDrawer ? 'md:col-span-7' : 'md:col-span-8'}
              `}
          >
            <AnimatePresence>
              {questionsData?.map((qdata, index) => {
                return (
                  <motion.div
                    key={qdata?._id || index}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 0.95 }}
                    transition={{
                      duration: 0.3,
                      type: 'spring',
                      stiffness: 100,
                      delay: index * 0.1,
                      damping: 15
                    }}
                    // key prop that animates position changes
                    layout
                    // helps framer track specific item
                    layoutId={`question-${qdata?._id || index}`}
                  >
                    <>
                      <QuestionCard
                        question={qdata?.question}
                        answer={qdata?.answer}
                        // onLearnMore={()=> generateConceptExplanation(qdata?.question)}
                        // pin toggle
                      />
                    </>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default InterviewPrep
