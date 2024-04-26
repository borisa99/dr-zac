import React from 'react'
import Logo from '@/assets/Icons/logo.svg'
import Container from '../UI/Container'
import FooterCTA from './FooterCTA'
import FooterNavMenu from './FooterNavMenu'
import FooterNewsletter from './FooterNewsletter'
import FooterSocials from './FooterSocials'

export default function Footer() {
  return (
    <footer className="text-paragraph bottom-0 mt-auto w-full bg-white pt-10 text-white">
      <Container>
        <FooterNewsletter />
        <div className="text-textMain flex items-start justify-between gap-6 pb-10 pt-[3.75rem]">
          <Logo />
          <FooterCTA />
          <FooterNavMenu />
          <FooterSocials />
        </div>
      </Container>
    </footer>
  )
}
