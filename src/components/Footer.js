import React from 'react'
import { useForm } from 'react-hook-form'
import Facebook from '@/assets/Icons/facebook.svg'
import Instagram from '@/assets/Icons/instagram.svg'
import Logo from '@/assets/Icons/logo.svg'
import X from '@/assets/Icons/x.svg'
import Youtube from '@/assets/Icons/youtube.svg'
import Input from './Form/partials/Input'
import Button from './UI/Button'
import Container from './UI/Container'
import Link from '@/resolvers/Link'
import footer from '@/settings/footer.json'

const socials = [
  { Icon: Facebook, url: 'https://www.facebook.com' },
  { Icon: Instagram, url: 'https://www.instagram.com' },
  { Icon: Youtube, url: 'https://www.youtube.com' },
  { Icon: X, url: 'https://twitter.com' },
]

const inputData = {
  name: '',
  label: 'Email',
  value: '',
  input_type: 'email',
  autocomplete: 'email',
}

export default function Footer() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors: fieldErrors },
  } = useForm()

  const onSubmit = async (formData) => {
    console.log(formData)
  }

  return (
    <footer className="text-paragraph bottom-0 mt-auto w-full bg-white pt-10 text-white">
      <Container>
        <div className="bg-darkBlue mb-20 flex flex-col items-center justify-center gap-y-8 rounded-[1.25rem] py-24">
          {/* block 1 */}
          <div className="text-center">
            <h2 className="mb-4 text-6xl leading-[3.5rem] tracking-tight">
              Sign up to my <span className="text-blue">newsletter</span>
            </h2>
            <p className="text-md w-[37.5rem] leading-6">
              I am passionate about proactive, preventative healthcare, and
              inspiring others to live happier and healthier for longer.
            </p>
          </div>
          {/* block 2 */}
          <form
            className="flex items-end gap-[0.68rem]"
            // name={data.title}
            onSubmit={handleSubmit(onSubmit)}
            // data-netlify={data.settings.resolver === 'Form'}
          >
            <Input
              data={inputData}
              white="white"
              setValue={setValue}
              register={register}
              errors={fieldErrors}
            />
            <Button className="w-full" type="submit">
              Sign up
            </Button>
          </form>
        </div>
        <div className="text-textMain flex items-start justify-between gap-6 pb-10 pt-[3.75rem]">
          {/* Logo */}
          <div className="">
            <Logo />
          </div>
          {/* Consultation */}
          <div className="w-[31rem]">
            <p className="mb- mb-6 leading-6 text-[#5D5D5D]">
              I believe that making small changes to your daily routine can have
              massive lasting impact on the rest of your life. I’m passionate
              about pro-active preventative care and inspiring others to live
              happier and healthier for longer.
            </p>
            <Button>Book a consultation</Button>
          </div>
          {/* Menu */}
          <div className="">
            <h3 className="mb-3 text-[0.813rem] uppercase text-[#888]">Menu</h3>
            <ul className="flex flex-col gap-y-2">
              {footer.footer.map((item, i) => (
                <Link
                  className="text-textMain cursor-pointer"
                  to={item.permalink}
                  key={i}
                >
                  {item.name}
                </Link>
              ))}
            </ul>
          </div>
          {/* Socials */}
          <div className="">
            <h3 className="mb-3 text-[0.813rem] uppercase text-[#888]">
              Socials
            </h3>
            <ul className="flex gap-x-4">
              {socials.map((social, index) => (
                <li key={index}>
                  <Link
                    to={social.url}
                    className="text-textMain cursor-pointer"
                    target="_blank"
                  >
                    <social.Icon className="h-6 w-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  )
}
