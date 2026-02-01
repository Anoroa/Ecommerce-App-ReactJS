import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Header from '../components/Header'

const PrimaryLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
    </>
  )
}

export default PrimaryLayout