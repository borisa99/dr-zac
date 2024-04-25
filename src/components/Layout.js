import React from 'react'
import Footer from './Footer'
import Header from '@/components/Header'

const Layout = ({ nav = false, children }) => {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-white">
        {nav && <Header />}
        <main className="wrapper">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
