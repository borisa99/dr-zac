import React from 'react'
import logo from '@/assets/Images/logo.png'
import Container from '../UI/Container'
import FooterCTA from './FooterCTA'
import FooterNewsletter from './FooterNewsletter'
import FooterSocials from './FooterSocials'
import Image from '@/resolvers/Image'
import Link from '@/resolvers/Link'
import footer from '@/settings/footer.json'

export default function Footer() {
  return (
    <footer className="text-paragraph bottom-0 mt-auto w-full bg-white pb-6 pt-14">
      <Container className={'pb-6'}>
        {/* <FooterNewsletter /> */}
        <div className="flex flex-col items-center justify-center gap-6 pb-10 pt-[3.75rem] xl:flex-row xl:items-start xl:justify-between ">
          <Link to="/" className="cursor-pointer text-2xl font-bold">
            <Image alt="Dr Zac Logo" src={logo} />
          </Link>
          <FooterCTA />
          <div className="flex flex-col items-center justify-center xl:items-start ">
            <h3 className="mb-3 text-[0.813rem] uppercase text-[#888]">Menu</h3>
            <nav className="flex flex-col gap-y-2">
              {footer.footer.map((item, i) => (
                <Link
                  className="cursor-pointer text-center text-black xl:text-left"
                  to={item.permalink}
                  key={i}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <FooterSocials />
        </div>
      </Container>
      <Container className="border-t border-gray-100 pt-6">
        <div className="flex flex-col items-center justify-center gap-2 text-[0.813rem] text-[#888] xl:flex-row xl:items-center xl:justify-between">
          <p>© {new Date().getFullYear()} Dr Zac</p>
          <a
            href="https://cleancommit.io?ref=doctor-zac"
            target="_blank"
            rel="noreferrer"
          >
            Website by Clean Commit
          </a>
        </div>
      </Container>
    </footer>
  )
}
