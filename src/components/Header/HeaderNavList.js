import React from 'react'
import Link from '@/resolvers/Link'
import nav from '@/settings/main.json'

export default function HeaderNavList() {
  return (
    <div className="hidden items-center uppercase leading-4 xl:flex">
      <nav className="flex gap-10">
        {nav.nav.map((item, i) => {
          return (
            <Link
              className={`cursor-pointer text-[0.938rem] font-semibold leading-4`}
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
