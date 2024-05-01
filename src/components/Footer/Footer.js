import React from 'react'
import Logo from '@/assets/Icons/logo.svg'
import Container from '../UI/Container'
import FooterCTA from './FooterCTA'
import FooterNavMenu from './FooterNavMenu'
import FooterNewsletter from './FooterNewsletter'
import FooterSocials from './FooterSocials'

export default function Footer() {
  return (
    <footer className="bottom-0 mt-auto w-full bg-white pt-10 text-paragraph text-white">
      <Container>
        <FooterNewsletter />
        <div className="flex flex-col items-center justify-center gap-6 pb-10 pt-[3.75rem] text-textMain xl:flex-row xl:items-start xl:justify-between ">
          <Logo />
          <FooterCTA />
          <FooterNavMenu />
          <FooterSocials />
        </div>
      </Container>
    </footer>
  )
}
