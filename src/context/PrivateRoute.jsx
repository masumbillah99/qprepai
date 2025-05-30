import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()

  if (loading) return <div>Loading...</div>
  return user ? children : <Navigate to='/login' replace />

  // if (loading) {
  //   return <div>Loading...</div>
  // }

  // if (!user) {
  //   return <Navigate to='/' replace />
  // }

  // return children
}

export default PrivateRoute
