import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import HomePage from './components/homepage/Homepage'
import HeaderSocials from './components/header/HeaderSocials'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
        <Header />
        <Navbar />
        <HomePage />
        <HeaderSocials />
        <Footer />
    </>
  )
}

export default App