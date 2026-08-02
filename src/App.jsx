import Sidebar from './components/siderbar'
// import { useState } from 'react'
import { Navigate, Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard';
import Order from './pages/orders';
import Header from './components/header';
import Product from './pages/product';

function App() {
  return (
    <div className='h-[100vh]'>
      <div className='h-full grid grid-cols-12'>
        <div className='col-span-2'>
          <Sidebar />
        </div>
        <div className='col-span-10'>
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Order />} />
            <Route path="/products" element={<Product />} />
          </Routes>

        </div>
      </div>
    </div>
  )
}

export default App
