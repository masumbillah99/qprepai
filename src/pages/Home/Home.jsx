import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <>
      <section className='bg-[var(--transparent-varient)] backdrop-blur-md rounded-b-[60px] p-5 md:p-10'>
        <section className='container mx-auto'>
          {/* header */}
          <header className='flex items-center justify-between'>
            <div>
              <Link to={'/'}>
                <h2 className='text-2xl font-bold text-black'>QPrepAi</h2>
              </Link>
              <small className='font-body'>Interview Preparation App</small>
            </div>

            <div>
              <button className='btn-primary'>Login / Sign Up</button>
            </div>
          </header>

          {/* hero section */}
          <div className='flex items-center gap-5 py-[100px]'>
            <div className='w-1/2'>
              <h1 className='text-4xl md:text-5xl font-bold text-[var(--body-text)] font-display leading-tight'>
                Master Interviews with AI-Powered Precision
              </h1>
            </div>

            <div className='w-2/5'>
              <p className='font-body font-base text-black pb-5'>
                QPrepAI generates personalized questions, expert answers, and
                smart explanations—tailored to your role, experience, and
                learning pace.
              </p>
              <button className='btn-small'>Get Started</button>
            </div>
          </div>

          {/* video */}
          <div className='flex justify-center'>
            <iframe
              // width='560'
              // height='315'
              src='https://www.youtube.com/embed/l_ubl7P265o?si=EupAyLhJecFoq6lt'
              title='Ai Video'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerpolicy='strict-origin-when-cross-origin'
              allowfullscreen
              className='w-4/5 h-[500px] md:h-[500px] aspect-video rounded-xl'
            ></iframe>
          </div>
        </section>
      </section>
    </>
  )
}

export default Home
