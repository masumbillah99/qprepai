import React from 'react'
import useAuth from '../../hooks/useAuth'
import { useNavigate } from 'react-router'
import userImage from '../../assets/profile.jpeg'
import toast from 'react-hot-toast'

const ProfileCard = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    //  clear cookies because there is token
    await logout()
    navigate('/')
    toast.success('logged out user successfully')
  }

  return (
    <div className='flex items-center'>
      <img
        src={userImage}
        alt=''
        className='w-12 h-12 bg-gray-300 rounded-full mr-3'
      />
      <div>
        <div className='text-base text-black font-bold leading-3'>
          {user?.fullName || ''}
        </div>
        <button
          className='text-indigo-600 text-sm font-semibold cursor-pointer hover:underline'
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default ProfileCard
