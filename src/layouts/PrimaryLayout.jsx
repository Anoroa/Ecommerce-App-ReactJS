import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ToastContainer } from "react-toastify"

const PrimaryLayout = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default PrimaryLayout