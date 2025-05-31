import React from 'react'
import useAuth from '../hooks/useAuth'
import { Link } from 'react-router'
import ProfileCard from '../components/Card/ProfileCard'

const DashboardLayout = ({ children }) => {
  const { user } = useAuth()

  return (
    <div>
      <header className='border-b border-gray-200 py-2 px-5 md:px-0'>
        <div className='container mx-auto flex items-center justify-between '>
          <div>
            <Link to={'/'}>
              <h2 className='text-2xl font-bold text-black'>QPrepAi</h2>
            </Link>
            <small className='font-body'>Interview Preparation App</small>
          </div>

          <div>
            <ProfileCard />
          </div>
        </div>
      </header>

      {user && <div>{children}</div>}
    </div>
  )
}

export default DashboardLayout
