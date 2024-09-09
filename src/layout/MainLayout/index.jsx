import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import ScrollToTop from '../../components/scrollToTop'

const MainLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
      <ScrollToTop/>
    </div>
  )
}

export default MainLayout
