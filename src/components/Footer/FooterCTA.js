import React from 'react'
import Button from '../UI/Button'

export default function FooterCTA() {
  return (
    <div className="w-full text-center xl:w-[31rem] xl:text-left">
      <p className="mb- mb-6 leading-6 text-[#5D5D5D]">
        I believe that making small changes to your daily routine can have
        massive lasting impact on the rest of your life. I’m passionate about
        pro-active preventative care and inspiring others to live happier and
        healthier for longer.
      </p>
      <Button
        button={{
          url: 'https://conciergedoctors.com.au/pages/new-patient?ref=drzac',
        }}
        children="Book a consultation"
      />
    </div>
  )
}
