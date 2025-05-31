import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'
import DashboardLayout from '../../layout/DashboardLayout'
import { useNavigate } from 'react-router'
import { FaPlus } from 'react-icons/fa'
import SummaryCard from '../../components/Card/SummaryCard'

const Dashboard = () => {
  const [openCreateModal, setOpenCreateModal] = useState(false)
  const [sessions, setSessions] = useState([])
  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    open: false,
    data: null
  })
  const navigate = useNavigate()

  const fetchAllSessions = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/sessions/my-sessions`,
        { credentials: 'include' }
      )
      if (res.ok) {
        const data = await res.json()
        console.log('25', data)
        setSessions(data)
      } else {
        console.error('Failed to fetch sessions')
      }
    } catch (err) {
      console.error('Error fetching sessions:', err)
    }
  }

  // console.log(sessions)

  const deleteSession = async sessionId => {}

  useEffect(() => {
    fetchAllSessions()
  }, [])

  // console.log(user)

  return (
    <div className=''>
      <DashboardLayout>
        <div className='container mx-auto p-4 mt-20'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7 pt-1 pb-6'>
            {sessions?.map(session => (
              <SummaryCard
                key={session?._id}
                role={session?.role}
                topicsToFocus={session?.topicsToFocus}
                experience={session?.experience}
                questions={session?.questions?.length || '-'}
                description={session?.description}
                onSelect={() => navigate(`/interview-prep/${session?._id}`)}
                onDelete={() => setOpenDeleteAlert({ open: true, session })}
              />
            ))}
          </div>

          <button
            className='btn-primary fixed bottom-10 md:bottom-20 right-10 md:right-20'
            onClick={() => setOpenCreateModal()}
          >
            <FaPlus className='' />
            Add New
          </button>
        </div>
      </DashboardLayout>
    </div>
  )
}

export default Dashboard
