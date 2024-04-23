import React from 'react'
import Logo from '@/assets/Icons/logo.svg'
import DarkmodeToggle from './DarkmodeToggle'
import Button from './UI/Button'
import Container from './UI/Container'
import Link from '@/resolvers/Link'
import nav from '@/settings/main.json'

export default function Header() {
  return (
    <header className="bg-hero text-textMain flex py-5 text-[0.813rem]">
      <Container className="m-auto flex items-start justify-between">
        <Link to="/" className="cursor-pointer text-2xl font-bold">
          <Logo />
        </Link>

        <div className="flex items-start gap-[0.813rem]">
          <div className="font flex items-center  uppercase leading-4">
            <nav className="flex gap-4">
              {nav.nav.map((item, i) => (
                <Link className="cursor-pointer" to={item.permalink} key={i}>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <Button children="Book a consultation" url="/" />
        </div>
      </Container>
    </header>
  )
}
