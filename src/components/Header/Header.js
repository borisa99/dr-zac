import React from 'react'
import Button from '../UI/Button'
import Container from '../UI/Container'
import HeaderLogo from './HeaderLogo'
import HeaderNavList from './HeaderNavList'

export default function Header() {
  return (
    <header className="text-textMain absolute left-1/2 top-0 z-[50] flex w-full -translate-x-1/2  bg-transparent  text-[0.813rem]">
      <Container className="m-auto flex items-start justify-between border-[1px] border-transparent border-b-[#E7E7E7] py-5">
        <HeaderLogo />
        <div className="flex items-start gap-[0.813rem]">
          <HeaderNavList />
          <Button children="Book a consultation" url="/" />
        </div>
      </Container>
    </header>
  )
}
