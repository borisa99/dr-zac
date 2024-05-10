import React, { useState, useEffect } from 'react'
import Button from '../UI/Button'
import Container from '../UI/Container'
import HeaderHamburgerButton from './HeaderHamburgerButton'
import HeaderLogo from './HeaderLogo'
import HeaderNavList from './HeaderNavList'
import HeaderNavMobileList from './HeaderNavMobileList'

// Gatsby's underlying routing library

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const handleNav = () => {
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    const closeNavOnScroll = () => {
      if (isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('scroll', closeNavOnScroll)

    return () => {
      window.removeEventListener('scroll', closeNavOnScroll)
    }
  }, [isOpen])

  return (
    <header className="absolute left-1/2 top-0 z-[50] flex w-full -translate-x-1/2 bg-transparent  text-[0.813rem]  text-textMain">
      <Container className="m-auto flex items-start justify-between  border-[1px] border-transparent border-b-[#E7E7E7] py-5 xl:justify-between">
        <HeaderLogo />
        <div className="flex items-center gap-[2rem]">
          <HeaderNavList />
          {/* <button className="z-[50]" onClick={handleNav}> */}
          <HeaderHamburgerButton isOpen={isOpen} handleNav={handleNav} />
          {isOpen && <HeaderNavMobileList />}
          <Button
            children="Book a consultation"
            url="/"
            className="hidden xl:inline-block"
          />
        </div>
      </Container>
    </header>
  )
}

export default Header
