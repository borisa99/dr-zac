import React from 'react'
import Link from '@/resolvers/Link'
import footer from '@/settings/footer.json'

export default function FooterNavMenu() {
  return (
    <div>
      <h3 className="mb-3 text-[0.813rem] uppercase text-[#888]">Menu</h3>
      <ul className="flex flex-col gap-y-2">
        {footer.footer.map((item, i) => (
          <Link
            className="text-textMain cursor-pointer"
            to={item.permalink}
            key={i}
          >
            {item.name}
          </Link>
        ))}
      </ul>
    </div>
  )
}
