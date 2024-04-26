import React from 'react'
import Logo from '@/assets/Icons/logo.svg'
import Link from '@/resolvers/Link'

export default function HeaderLogo() {
  return (
    <Link to="/" className="cursor-pointer text-2xl font-bold">
      <Logo />
    </Link>
  )
}
