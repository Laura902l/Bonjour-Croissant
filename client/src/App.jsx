import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Toaster } from "react-hot-toast"
import Home from './pages/Home'
const App = () => {
  const isSellerPath = useLocation().pathname.includes('seller');
  return (
    <div className='bg-neutral-50'>
      {
        isSellerPath ? null : <Navbar />
      }
      <Toaster />

      <div className={`${isSellerPath ? "" : ""}`}>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App