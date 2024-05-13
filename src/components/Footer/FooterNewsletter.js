import React from 'react'
import FooterNewsletterForm from './FooterNewsletterForm'

export default function FooterNewsletter() {
  return (
    <div className="mb-20 flex flex-col items-center justify-center gap-y-8 rounded-[1.25rem] bg-blue-950 py-24 text-white">
      <div className="text-center">
        <h2 className="font-title mb-4 text-4xl leading-[3.5rem] tracking-tight xl:text-6xl">
          Sign up to my <span className="text-blue-500">newsletter</span>
        </h2>
        <p className="w-full text-md leading-6 text-gray-100 xl:w-[37.5rem]">
          I am passionate about proactive, preventative healthcare, and
          inspiring others to live happier and healthier for longer.
        </p>
      </div>
      <FooterNewsletterForm />
    </div>
  )
}
