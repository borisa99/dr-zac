import React from 'react'
import Footer from './Footer/Footer'
import Header from '@/components/Header/Header'

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-white">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
