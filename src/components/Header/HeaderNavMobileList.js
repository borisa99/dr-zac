import React from 'react'
import { useLocation } from '@reach/router'
import Link from '@/resolvers/Link'
import nav from '@/settings/main.json'

export default function HeaderNavMobileList() {
  const location = useLocation()
  return (
    <div
      className={`fixed left-0 top-0 z-[20] flex h-screen w-screen items-center bg-white uppercase leading-4 xl:hidden`}
    >
      <nav className="flex h-full w-full max-w-[76.5rem] flex-col items-center justify-center gap-10 px-4">
        <Link
          className={`cursor-pointer text-[0.938rem] font-semibold leading-4  ${location.pathname === '/' ? 'text-blue' : ''}`}
          to="/"
        >
          Home
        </Link>
        {nav.nav.map((item, i) => {
          const isActive = item.permalink === location.pathname

          return (
            <Link
              className={`cursor-pointer text-[0.938rem] font-semibold leading-4  ${isActive ? 'text-blue' : ''}`}
              to={item.permalink}
              key={i}
            >
              {item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}