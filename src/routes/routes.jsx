import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home'
import Basket from '../pages/Basket'
import Wishlist from '../pages/Wishlist'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={< MainLayout/>}>
          <Route index element={<Home />} />
          <Route path="basket" element={<Basket />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
    </div>
  )
}

export default AppRoutes
