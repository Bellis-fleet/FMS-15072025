import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Cardetails from './pages/Cardetails'
import Cars from './pages/cars'
import Mybookings from './pages/Mybookings'
import Login from './components/Login'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  const isOwnerPath = useLocation().pathname.startsWith('/owner')

  return (
    <>
        {showLogin && <Login setShowLogin={setShowLogin} />}
   
      {!isOwnerPath &&<Navbar setShowLogin={setShowLogin} />}
      
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ Car-details/:id" element={< Cardetails />} />
      <Route path="/ Cars " element={<Cars />} />
      <Route path="/My-bookings" element={<Mybookings/>} />

    
      </Routes>
    </>
  )
}

export default App
