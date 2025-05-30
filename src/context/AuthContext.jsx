import { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // register user
  const registerUser = async (fullName, email, password) => {
    setLoading(true)

    try {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/register`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({ fullName, email, password })
        }
      )

      if (!res.ok) {
        setUser(null)
        throw new Error('Registration failed')
      }

      await fetchProfile()
      return { success: true, message: 'User registered successfully' }
    } catch (err) {
      setUser(null)
      return false
    } finally {
      setLoading(false)
    }
  }

  // login user
  const loginUser = async (email, password) => {
    setLoading(true)
    try {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/login`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({ email, password })
        }
      )

      if (!res.ok) {
        throw new Error('Login failed')
      }

      await fetchProfile()
      return true
    } catch (err) {
      setUser(null)
      return false
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    try {
      await fetch(`${import.meta.env.VITE_SERVER_URL}/api/auth/logout`, {
        method: 'POST',
        credentials: 'include'
      })
      setUser(null)
    } catch (err) {
      console.error('Logout failed from logout:', err)
    }
  }

  const fetchProfile = async () => {
    setLoading(true)

    try {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/profile`,
        { credentials: 'include' }
      )
      if (res.ok) {
        const data = await res.json()
        setUser(data.data)
      } else {
        setUser(null)
      }
    } catch {
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!user) {
      fetchProfile()
    }
    // eslint-disable-next-line
  }, [user])

  const authInfo = { user, loading, registerUser, loginUser, logout }

  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  )
}
