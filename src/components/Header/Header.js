import React from 'react'
import Button from '../UI/Button'
import Container from '../UI/Container'
import HeaderLogo from './HeaderLogo'
import HeaderNavList from './HeaderNavList'

export default function Header() {
  return (
    <header className="absolute left-1/2 top-0 z-[50] flex w-full -translate-x-1/2 bg-transparent  text-[0.813rem]  text-textMain">
      <Container className="m-auto flex items-start justify-center  border-[1px] border-transparent border-b-[#E7E7E7] py-5 xl:justify-between">
        <HeaderLogo />
        <div className="flex items-center gap-[0.813rem]">
          <HeaderNavList />
          <Button
            children="Book a consultation"
            url="/"
            className="hidden xl:inline-block"
          />
        </div>
      </Container>
    </header>
  )
}
