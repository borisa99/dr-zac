import React from 'react'
import Footer from './Footer/Footer'
import Header from '@/components/Header/Header'

const Layout = ({ children, header = 'default' }) => {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-white">
        <Header type={header} />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
