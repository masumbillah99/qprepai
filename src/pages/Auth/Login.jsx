import React, { useState } from 'react'
import Input from '../../components/Inputs/Input'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import toast from 'react-hot-toast'

const Login = ({ setCurrentPage }) => {
  // information state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const { loginUser } = useAuth()
  const navigate = useNavigate()

  // handle login form
  const handleLoginUser = async evt => {
    evt.preventDefault()

    // basic validation
    if (!email || !password) {
      setError('Please enter both email and password')
      return
    }

    setError('')

    // login api
    const success = await loginUser(email, password)
    if (success) {
      toast.success('User login successful')
      navigate('/dashboard')
    } else {
      setError('Login failed. Check email and password')
    }

    // try {
    //   const res = await fetch(
    //     `${import.meta.env.VITE_SERVER_URL}/api/auth/login`,
    //     {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify({ email, password })
    //     }
    //   )
    //   const data = await res.json()
    //   if (!res.ok) {
    //     setError(data.message || 'Login failed')
    //     return
    //   }
    //   // Save user in context (no token)
    //   login(data.user)
    //   console.log('logged in user:', data)
    //   navigate('/dashboard')
    // } catch (err) {
    //   setError('Network error')
    // }
  }

  return (
    <div className='max-w-md mx-auto p-6 bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]'>
      <div className='mb-6'>
        <h2 className='text-2xl font-bold text-center text-[var(--body-text)] mb-1'>
          Welcome Back
        </h2>
        <p className='font-body text-sm text-center text-gray-500'>
          Enter your details to login
        </p>
      </div>

      <form onSubmit={handleLoginUser}>
        <Input
          type='email'
          name='email'
          label='Email Address'
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder='dev@test.com'
        />

        <Input
          type='password'
          name='password'
          label='Password'
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          placeholder='Password length must be 8 characters'
        />

        {/* error message */}
        {error && (
          <p className='font-body text-xs text-red-500 pb-2.3'>{error}</p>
        )}

        {/* login button */}
        <button
          type='submit'
          className='w-full mt-4 py-2 bg-gradient-to-r from-[var(--primary-color)] to-[#665fe3] text-white rounded-lg hover:from-[var(--primary-color)] hover:to-[var(--primary-color)] cursor-pointer transition-colors duration-300'
        >
          Login
        </button>

        <p className='font-body text-base mt-5'>
          {' '}
          New in our website?{' '}
          <button
            className='underline text-[var(--primary-color)] cursor-pointer'
            onClick={() => setCurrentPage('signup')}
          >
            SignUp
          </button>
        </p>
      </form>
    </div>
  )
}

export default Login
