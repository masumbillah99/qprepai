import React from 'react'
import { IoClose } from 'react-icons/io5'
import { createPortal } from 'react-dom'

const Modal = ({ isOpen, onClose, title, hideHeader = false, children }) => {
  if (!isOpen) return null

  return createPortal(
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
      <div className='bg-white w-[90%] max-w-md rounded-xl shadow-lg p-5 relative transition-all duration-300'>
        {!hideHeader && (
          <div className='flex items-center justify-between mb-4'>
            <h3 className='text-xl font-semibold text-[var(--body-text)]'>
              {title}
            </h3>
            <button
              onClick={onClose}
              className='text-gray-500 hover:text-[var(--primary-color)] cursor-pointer'
            >
              <IoClose size={24} />
            </button>
          </div>
        )}

        {/* modal body */}
        <div className='flex-1 overflow-y-auto'>{children}</div>
      </div>
    </div>,
    document.body
  )
}

export default Modal
