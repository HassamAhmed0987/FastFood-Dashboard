import Sidebar from './components/siderbar'
// import { useState } from 'react'
import { Navigate, Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard';

function App() {
  return (
    <div className='h-[100vh]'>
      <div className='h-full grid grid-cols-12'>
        <div className='col-span-2'>
          <Sidebar />
        </div>
        <div className='col-span-10'>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/dashboard" element={null} />
          </Routes>

        </div>
      </div>
    </div>
  )
}

export default App
