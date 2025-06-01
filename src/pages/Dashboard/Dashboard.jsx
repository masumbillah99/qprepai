import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../layout/DashboardLayout'
import { useNavigate } from 'react-router'
import { FaPlus } from 'react-icons/fa'
import SummaryCard from '../../components/Card/SummaryCard'
import Modal from '../../components/Modals/Modals'
import CreateSessionForm from '../../components/Inputs/CreateSessionForm'
import DeleteAlertContent from '../../components/Modals/DeleteAlertContent'
import toast from 'react-hot-toast'

const Dashboard = () => {
  const [openCreateModal, setOpenCreateModal] = useState(false)
  const [sessions, setSessions] = useState([])
  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    open: false,
    session: null
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
        // console.log('25', data)
        setSessions(data)
      } else {
        console.error('Failed to fetch sessions')
      }
    } catch (err) {
      console.error('Error fetching sessions:', err)
    }
  }

  // console.log(sessions)

  const deleteSession = async sessionData => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/sessions/${sessionData?._id}`,
        {
          method: 'DELETE',
          credentials: 'include'
        }
      )
      if (res.ok) {
        toast.success('Session deleted successfully')
        setOpenDeleteAlert({ open: false, session: null })
        fetchAllSessions()
      } else {
        console.error('Failed to delete session')
      }
    } catch (err) {
      console.error('Error deleting session:', err)
    }
  }

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

          {/* add new btn */}
          <button
            className='btn-primary fixed bottom-10 md:bottom-20 right-10 md:right-20'
            onClick={() => setOpenCreateModal(true)}
          >
            <FaPlus className='' />
            Add New
          </button>
        </div>

        {/* session create modal */}
        <Modal
          isOpen={openCreateModal}
          onClose={() => setOpenCreateModal(false)}
        >
          <div>
            <CreateSessionForm setOpenCreateModal={setOpenCreateModal} />
          </div>
        </Modal>

        {/* session delete alert modal */}
        <Modal
          isOpen={openDeleteAlert?.open}
          onClose={() => setOpenDeleteAlert({ open: false, session: null })}
          title={'Delete Alert'}
        >
          <div className=''>
            <DeleteAlertContent
              content='Are you sure you want to delete this session?'
              onDelete={() => deleteSession(openDeleteAlert?.session)}
            />
          </div>
        </Modal>
      </DashboardLayout>
    </div>
  )
}

export default Dashboard
