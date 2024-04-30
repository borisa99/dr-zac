import React from 'react'
import logo from '@/assets/Images/logo.png'
import Image from '@/resolvers/Image'
import Link from '@/resolvers/Link'

export default function HeaderLogo() {
  return (
    <Link to="/" className="cursor-pointer text-2xl font-bold">
      <Image alt="Dr Zac Logo" src={logo} />
    </Link>
  )
}
