import React from 'react'

const RoleInfoHeader = ({
  role,
  topicsToFocus,
  experience,
  description,
  questions
}) => {
  return (
    <div>
      <div className='container mx-auto p-4 mt-20'>
        {/* title & topics to focus */}
        <div className=''>
          <h2 className='text-xl text-black font-semibold capitalize'>
            {role}
          </h2>
          <p className='font-body text-black text-xs capitalize'>
            {topicsToFocus}
            {/* {topicsToFocus.join(', ')} */}
          </p>
        </div>

        {/* 2nd container */}
        <div className='flex items-center gap-5 pt-5'>
          <div className='bg-black text-white px-2 py-1 font-body font-medium text-sm rounded-full'>
            Experience: {experience} {experience === 1 ? 'years' : 'year'}
          </div>
          <div className='bg-black text-white px-2 py-1 font-body font-medium text-sm rounded-full'>
            {questions} Q&A
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoleInfoHeader
