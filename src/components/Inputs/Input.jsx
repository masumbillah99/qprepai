import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const Input = ({
  type = 'text',
  name,
  label,
  value,
  onChange,
  placeholder
}) => {
  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => setShowPassword(prev => !prev)

  return (
    <div className='mb-4'>
      {label && (
        <label className='block mb-1 text-sm font-medium text-[var(--body-text)]'>
          {label}
        </label>
      )}
      <div className='relative'>
        <input
          type={
            type === 'password' ? (showPassword ? 'text' : 'password') : type
          }
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none pr-10'
        />
        {type === 'password' && (
          <button
            type='button'
            onClick={toggleShowPassword}
            className='absolute right-3 top-2.5 text-gray-500 hover:text-[var(--primary-color)] cursor-pointer'
          >
            {showPassword ? (
              <AiOutlineEyeInvisible size={20} />
            ) : (
              <AiOutlineEye size={20} />
            )}
          </button>
        )}
      </div>
    </div>
  )
}

export default Input
