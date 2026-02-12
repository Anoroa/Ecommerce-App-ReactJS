import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'

const PrimaryLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default PrimaryLayout