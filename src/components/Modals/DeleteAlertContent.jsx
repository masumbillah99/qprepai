import React from 'react'

const DeleteAlertContent = ({ content, onDelete }) => {
  return (
    <div className='p-5'>
      <p className='text-sm'>{content}</p>

      <div className='flex justify-end mt-6'>
        <button type='button' className='btn-primary mr-3' onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default DeleteAlertContent
