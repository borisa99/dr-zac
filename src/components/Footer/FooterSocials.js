import React from 'react'
import Facebook from '@/assets/Icons/facebook.svg'
import Instagram from '@/assets/Icons/instagram.svg'
import X from '@/assets/Icons/x.svg'
import Youtube from '@/assets/Icons/youtube.svg'
import Link from '@/resolvers/Link'

const socials = [
  { Icon: Facebook, url: 'https://www.facebook.com' },
  { Icon: Instagram, url: 'https://www.instagram.com' },
  { Icon: Youtube, url: 'https://www.youtube.com' },
  { Icon: X, url: 'https://twitter.com' },
]

export default function FooterSocials() {
  return (
    <div>
      <h3 className="mb-3 text-[0.813rem] uppercase text-[#888]">Socials</h3>
      <ul className="flex gap-x-4">
        {socials.map((social, index) => (
          <li key={index}>
            <Link
              to={social.url}
              className="text-textMain cursor-pointer"
              target="_blank"
            >
              <social.Icon className="h-6 w-6" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
