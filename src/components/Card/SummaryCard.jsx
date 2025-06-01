import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { getInitials } from '../../utils/helper'

const SummaryCard = ({
  role,
  topicsToFocus,
  experience,
  questions,
  description,
  onSelect,
  onDelete
}) => {
  return (
    <div
      className='[var(--body-base)] border border-gray-300 rounded-lg p-4 relative group cursor-pointer'
      onClick={onSelect}
    >
      {/* 1st container */}
      <div className='bg-linear-to-r from-gray-200 to-gray-300 p-3 flex items-center rounded-sm gap-5'>
        {/* GU - short form */}
        <div className='bg-[#f9fafb] p-2 text-center'>
          <span className='font-bold text-black text-base'>
            {getInitials(role)}
          </span>
        </div>

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
      </div>

      {/* delete btn on hover */}
      <button
        className='hidden group-hover:flex items-center absolute top-4 right-2 px-2 py-1 text-sm border border-red-500 text-white rounded hover:border-red-600 transition cursor-pointer'
        onClick={e => {
          e.stopPropagation()
          onDelete()
        }}
      >
        <FaTrashAlt className='text-black' />
      </button>

      {/* 2nd container */}
      <div className='flex items-center gap-5 pt-5'>
        <div className='border border-black px-2 py-1 font-body font-medium text-sm rounded-full'>
          Experience: {experience} {experience === 1 ? 'years' : 'year'}
        </div>
        <div className='border border-black px-2 py-1 font-body font-medium text-sm rounded-full'>
          {questions} Q&A
        </div>
      </div>

      {/* description */}
      <div className='pt-3'>
        <p className='font-body text-base text-gray-600'>{description}</p>
      </div>
    </div>
  )
}

export default SummaryCard
