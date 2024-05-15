import React from 'react'
import { useLocation } from '@reach/router'
import Link from '@/resolvers/Link'
import nav from '@/settings/main.json'

export default function HeaderNavMobileList() {
  return (
    <div
      className={`fixed left-0 top-0 z-40 flex h-screen w-full items-center bg-white uppercase leading-4 xl:hidden`}
    >
      <nav className="flex h-full w-full flex-col items-center justify-center gap-10 overflow-auto px-4">
        <Link
          activeClassName={`text-blue-500`}
          className={`cursor-pointer text-[0.938rem] font-semibold leading-4 `}
          to="/"
        >
          Home
        </Link>
        {nav.nav.map((item, i) => {
          return (
            <Link
              className={`cursor-pointer text-[0.938rem] font-semibold leading-4 `}
              activeClassName={`text-blue-500`}
              partiallyActive={true}
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
