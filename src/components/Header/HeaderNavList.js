import React from 'react'
import { cn } from '../../lib/helper'
import Link from '@/resolvers/Link'
import nav from '@/settings/main.json'

export default function HeaderNavList({ className = '' }) {
  return (
    <div
      className={cn(
        'hidden items-center uppercase leading-4 xl:flex',
        className,
      )}
    >
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
