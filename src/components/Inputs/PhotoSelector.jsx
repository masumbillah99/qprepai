// image change, remove image, preview, setpreview onchoose and the ui
// props image, setImage

import React, { useRef } from 'react'
import { FiUpload, FiX } from 'react-icons/fi'
import { LuUserRound } from 'react-icons/lu'

const PhotoSelector = ({ image, setImage, preview, setPreview }) => {
  const fileInputRef = useRef(null)

  const handleChooseImage = e => {
    const file = e.target.files[0]
    if (file) {
      setImage(file)
      const url = URL.createObjectURL(file)
      setPreview(url)
    }
  }

  const handleRemoveImage = () => {
    setImage(null)
    setPreview(null)
    if (fileInputRef.current) fileInputRef.current.value = null
  }

  return (
    <div className='w-full text-center'>
      {preview ? (
        <div className='relative inline-block'>
          <img
            src={preview}
            alt='Preview'
            className='w-20 h-20 object-cover rounded-full border border-gray-300 cursor-pointer'
          />
          <button
            onClick={handleRemoveImage}
            className='absolute -bottom-[-1px] -right-1 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 cursor-pointer'
            type='button'
          >
            <FiX size={14} />
          </button>
        </div>
      ) : (
        <div className='flex items-center justify-center mb-3'>
          <button
            type='button'
            onClick={() => fileInputRef.current.click()}
            className='w-20 h-20 flex items-center justify-center border border-dashed border-[var(--primary-color)] rounded-full text-gray-500 hover:text-[var(--primary-color)] cursor-pointer'
          >
            <LuUserRound size={20} />
          </button>
        </div>
      )}

      <input
        type='file'
        ref={fileInputRef}
        accept='image/*'
        onChange={handleChooseImage}
        className='hidden'
      />
    </div>
  )
}

export default PhotoSelector
