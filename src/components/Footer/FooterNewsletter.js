import React from 'react'
import FooterNewsletterForm from './FooterNewsletterForm'

export default function FooterNewsletter() {
  return (
    <div className="bg-darkBlue mb-20 flex flex-col items-center justify-center gap-y-8 rounded-[1.25rem] py-24">
      <div className="text-center">
        <h2 className="mb-4 text-6xl leading-[3.5rem] tracking-tight">
          Sign up to my <span className="text-blue">newsletter</span>
        </h2>
        <p className="text-md w-[37.5rem] leading-6">
          I am passionate about proactive, preventative healthcare, and
          inspiring others to live happier and healthier for longer.
        </p>
      </div>
      <FooterNewsletterForm />
    </div>
  )
}
