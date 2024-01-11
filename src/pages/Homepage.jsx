import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Featured from '../components/Featured'
import Client from '../components/Clients'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Client />
      <Footer />
    </>
  )
}

export default Homepage
