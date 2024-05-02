import React from 'react'
import { useLocation } from '@reach/router'
import Link from '@/resolvers/Link'
import nav from '@/settings/main.json'

export default function HeaderNavList() {
  const location = useLocation()

  return (
    <div className="hidden items-center uppercase leading-4 xl:flex">
      <nav className="flex gap-10">
        {nav.nav.map((item, i) => {
          const isActive = item.permalink === location.pathname

          return (
            <Link
              className={`cursor-pointer text-[0.938rem] font-semibold leading-4 ${isActive ? 'text-blue' : ''}`}
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
