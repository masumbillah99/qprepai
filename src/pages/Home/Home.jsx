import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { APP_FEATURES } from '../../utils/data'
import { FaCode } from 'react-icons/fa6'
import Modal from '../../components/Modals/Modals'
import Login from '../Auth/Login'
import SignUp from '../Auth/SignUp'
import useAuth from '../../hooks/useAuth'
import ProfileCard from '../../components/Card/ProfileCard'

const Home = () => {
  const [openModal, setOpenModal] = useState(false)
  const [currentPage, setCurrentPage] = useState('login')
  const { user } = useAuth()
  const navigate = useNavigate()

  // console.log(user)

  const handleCTA = () => {
    if (!user) {
      setOpenModal(true)
    } else {
      navigate('/dashboard')
    }
  }

  return (
    <>
      {/* hero section */}
      <section className='bg-[var(--transparent-varient)] backdrop-blur-md p-5 md:p-10'>
        <div className='container mx-auto min-h-full'>
          {/* header */}
          <header className='flex items-center justify-between'>
            <div>
              <Link to={'/'}>
                <h2 className='text-2xl font-bold text-black'>QPrepAi</h2>
              </Link>
              <small className='font-body'>Interview Preparation App</small>
            </div>

            <div>
              {user ? (
                <ProfileCard />
              ) : (
                <button
                  className='btn-primary'
                  onClick={() => setOpenModal(true)}
                >
                  Login / Sign Up
                </button>
              )}
            </div>
          </header>

          {/* title */}
          <div className='flex flex-col lg:flex-row items-center gap-5 py-[100px]'>
            <div className='w-full lg:w-1/2'>
              <h1 className='text-4xl md:text-5xl font-bold text-[var(--body-text)] font-display leading-tight'>
                Master Interviews with AI-Powered Precision
              </h1>
            </div>

            <div className='w-full lg:w-2/5'>
              <p className='font-body text-base text-black pb-5'>
                QPrepAI generates personalized questions, expert answers, and
                smart explanations—tailored to your role, experience, and
                learning pace.
              </p>
              {user ? (
                <button
                  className='btn-small'
                  onClick={() => navigate('/dashboard')}
                >
                  Get Started
                </button>
              ) : (
                <button className='btn-small' onClick={() => handleCTA()}>
                  Get Started
                </button>
              )}
            </div>
          </div>

          {/* video */}
          <div className='flex justify-center'>
            <iframe
              // width='560'
              // height='315'
              src='https://www.youtube.com/embed/owtO0cKwtk4?si=a9vLPxPYg1lWliq3'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerpolicy='strict-origin-when-cross-origin'
              allowfullscreen
              className='w-full lg:w-4/5 h-full lg:h-11/12 md:h-[500px] aspect-video rounded-xl'
            ></iframe>
          </div>
        </div>
      </section>

      {/* smart features section */}
      <section className=''>
        <div className='container mx-auto min-h-full pt-[100px] pb-[80px] md:pb-[100px] px-5'>
          <h2 className='text-4xl md:text-4xl text-center font-bold text-[var(--body-text)] font-display leading-tight'>
            Smart Features Built to Help You Succeed
          </h2>

          {/* features */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12'>
            {APP_FEATURES?.map(feature => (
              <div
                key={feature?.id}
                className='bg-white p-5 md:p-8 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] cursor-pointer transform transition-transform duration-300 ease-in-out hover:translate-y-2.5'
              >
                <h3 className='text-xl font-bold mb-7'>{feature?.title}</h3>
                <p className='font-body text-sm'>{feature?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* footer */}
      <div className='w-full text-center mb-5'>
        <Link
          to='https://github.com/masumbillah99/qprepai'
          target='_blank'
          className='inline-block text-black hover:text-[var(--primary-color)] transition-colors'
        >
          <p className='inline-flex items-center justify-center gap-1'>
            Developed by <FaCode /> ...Happy Coding
          </p>
        </Link>
      </div>

      <Modal
        isOpen={openModal}
        onClose={() => {
          setOpenModal(false)
          setCurrentPage('login')
        }}
        // hideHeader
      >
        <div>
          {currentPage === 'login' && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === 'signup' && (
            <SignUp setCurrentPage={setCurrentPage} />
          )}
        </div>
      </Modal>
    </>
  )
}

export default Home
