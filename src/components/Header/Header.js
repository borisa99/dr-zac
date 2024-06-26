import React, { useState, useEffect } from 'react'
import logo from '@/assets/Images/Header/drzac.svg'
import { cn } from '../../lib/helper'
import Logo from '../Icons/Logo'
import Button from '../UI/Button'
import Container from '../UI/Container'
import HeaderNavList from './HeaderNavList'
import HeaderNavMobileList from './HeaderNavMobileList'
import Image from '@/resolvers/Image'
import Link from '@/resolvers/Link'

// Gatsby's underlying routing library

function Header({ type = 'default' }) {
  const [isOpen, setIsOpen] = useState(false)
  const isLight = type === 'light'
  const handleNav = () => {
    setIsOpen((prev) => {
      if (prev) {
        document.documentElement.classList.remove('overflow-hidden')
      } else {
        document.documentElement.classList.add('overflow-hidden')
      }
      return !prev
    })
  }

  useEffect(() => {
    const closeNavOnScroll = () => {
      if (isOpen) {
        setIsOpen(false)
        document.documentElement.classList.remove('overflow-hidden')
      }
    }

    window.addEventListener('resize', closeNavOnScroll)

    return () => {
      window.removeEventListener('resize', closeNavOnScroll)
    }
  }, [isOpen])

  return (
    <>
      <header className="absolute left-1/2 top-0 z-[50] flex w-full -translate-x-1/2 bg-transparent  text-[0.813rem]  text-black">
        <Container className="m-auto flex items-start justify-between py-5 xl:justify-between">
          <Link to="/" className="cursor-pointer text-2xl font-bold">
            <Logo
              className={cn('text-black', {
                'text-white': isLight,
              })}
              width="116"
              height="48"
            />
          </Link>
          <div className="flex items-center gap-[2rem]">
            <HeaderNavList
              className={cn({
                'text-white': isLight,
              })}
            />
            <button
              aria-label={isOpen ? 'Close' : 'Open'}
              onClick={handleNav}
              className="relative z-50 h-14 w-14 rounded bg-transparent focus:outline-none xl:hidden"
            >
              <div className="absolute left-6 top-1/2 block w-5   -translate-x-1/2  -translate-y-1/2 transform">
                <span
                  className={`absolute block h-0.5 w-7 transform bg-current text-blue-500 transition duration-500 ease-in-out ${isOpen ? 'rotate-45' : ' -translate-y-1.5'}`}
                ></span>
                <span
                  className={`absolute block  h-0.5 w-5 transform bg-current   text-blue-500 transition duration-500 ease-in-out ${isOpen ? 'opacity-0' : ''}`}
                ></span>
                <span
                  className={`absolute block  h-0.5 w-7 transform bg-current text-blue-500  transition duration-500 ease-in-out ${isOpen ? '-rotate-45' : ' translate-y-1.5'}`}
                ></span>
              </div>
            </button>
            <Button
              button={{
                url: 'https://conciergedoctors.com.au/pages/new-patient?ref=drzac',
              }}
              children="Book a consultation"
              className="hidden xl:inline-block"
            />
          </div>
        </Container>
      </header>
      {isOpen && <HeaderNavMobileList closeList={() => setIsOpen(false)} />}
    </>
  )
}

export default Header
