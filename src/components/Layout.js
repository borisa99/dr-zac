import React from 'react'
import Footer from './Footer/Footer'
import Header from '@/components/Header/Header'

const Layout = ({ nav = false, children }) => {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-white">
        {nav && <Header />}
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
