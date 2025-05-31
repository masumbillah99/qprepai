import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import Home from './pages/Home/Home'
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp'
import Dashboard from './pages/Dashboard/Dashboard'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* home route */}
          <Route path='/' element={<Home />} />

          {/* others route */}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />

          {/* private route */}
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>

      <Toaster
        toastOptions={{
          className: '',
          duration: 5000,
          removeDelay: 1000,
          style: {
            fontSize: '13px'
          }
        }}
      />
    </div>
  )
}

export default App
