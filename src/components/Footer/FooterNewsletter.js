import React from 'react'
import FooterNewsletterForm from './FooterNewsletterForm'

export default function FooterNewsletter() {
  return (
    <div className="mb-20 flex flex-col items-center justify-center gap-y-8 rounded-[1.25rem] bg-darkBlue py-24">
      <div className="text-center">
        <h2 className="title-font mb-4 text-4xl leading-[3.5rem] tracking-tight xl:text-6xl">
          Sign up to my <span className="text-blue">newsletter</span>
        </h2>
        <p className="text-md w-full leading-6 xl:w-[37.5rem]">
          I am passionate about proactive, preventative healthcare, and
          inspiring others to live happier and healthier for longer.
        </p>
      </div>
      <FooterNewsletterForm />
    </div>
  )
}
