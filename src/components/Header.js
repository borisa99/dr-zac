import React from 'react'
import Logo from '@/assets/Icons/logo.svg'
import Button from './UI/Button'
import Container from './UI/Container'
import Link from '@/resolvers/Link'
import nav from '@/settings/main.json'

export default function Header() {
  return (
    <header className="text-textMain absolute left-1/2 top-0 z-[50] flex w-full -translate-x-1/2  bg-transparent  text-[0.813rem]">
      <Container className="m-auto flex items-start justify-between border-[1px] border-transparent border-b-[#E7E7E7] py-5">
        <Link to="/" className="cursor-pointer text-2xl font-bold">
          <Logo />
        </Link>

        <div className="flex items-start gap-[0.813rem]">
          <div className="font flex items-center  uppercase leading-4">
            <nav className="flex gap-10">
              {nav.nav.map((item, i) => (
                <Link
                  className="cursor-pointer text-[0.938rem] font-semibold leading-4"
                  to={item.permalink}
                  key={i}
                >
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
