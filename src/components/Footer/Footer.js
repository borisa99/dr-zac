import React from 'react'
import logo from '@/assets/Images/logo.png'
import Container from '../UI/Container'
import FooterCTA from './FooterCTA'
import FooterNavMenu from './FooterNavMenu'
import FooterNewsletter from './FooterNewsletter'
import FooterSocials from './FooterSocials'
import Image from '@/resolvers/Image'
import Link from '@/resolvers/Link'

export default function Footer() {
  return (
    <footer className="bottom-0 mt-auto w-full bg-white pt-10 text-paragraph text-white">
      <Container>
        <FooterNewsletter />
        <div className="flex flex-col items-center justify-center gap-6 pb-10 pt-[3.75rem] text-textMain xl:flex-row xl:items-start xl:justify-between ">
          <Link to="/" className="cursor-pointer text-2xl font-bold">
            <Image alt="Dr Zac Logo" src={logo} />
          </Link>
          <FooterCTA />
          <FooterNavMenu />
          <FooterSocials />
        </div>
      </Container>
    </footer>
  )
}
