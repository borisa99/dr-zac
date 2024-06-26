import React from 'react'
import fb from '@/assets/Images/socials/logo-facebook.png'
import inst from '@/assets/Images/socials/logo-instagram.png'
import yt from '@/assets/Images/socials/logo-youtube.png'
import Image from '@/resolvers/Image'
import Link from '@/resolvers/Link'

const socials = [
  { src: fb, url: 'https://www.facebook.com/Drzacturner/', name: 'Facebook' },
  {
    src: inst,
    url: 'https://www.instagram.com/drzacturner/',
    name: 'Instagram',
  },
  {
    src: yt,
    url: 'https://www.youtube.com/channel/UCpp-gbC1f3hZ6nBapnRzYYw/videos',
    name: 'YouTube',
  },
  // { src: twit, url: 'https://twitter.com' },
]

export default function FooterSocials() {
  return (
    <div>
      <h3 className="mb-3 text-center text-[0.813rem] uppercase text-[#888] xl:text-left">
        Socials
      </h3>
      <ul className="flex justify-center gap-x-4 xl:justify-start">
        {socials.map((social, index) => (
          <li key={index}>
            <Link
              to={social.url}
              className="cursor-pointer text-black"
              target="_blank"
            >
              <div className="sr-only">Dr Zac's {social.name}</div>
              {/* <social.Icon /> */}
              <Image src={social.src} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
