import React from 'react'
// import InstagramColored from '@/assets/Icons/instagramColored.svg'
// import YoutubeColored from '@/assets/Icons/youtubeColored.svg'
import { cn } from '@/lib/helper'
import Link from '@/resolvers/Link'

export default function Button({ className, button, children, ...props }) {
  let buttonStyle =
    'group inline-block rounded uppercase px-5 py-4 cursor-pointer text-[0.813rem]'
  switch (button?.variant) {
    case 'youtube':
      buttonStyle = `${buttonStyle} text-[#FF0000] bg-transparent border-[1px] flex gap-1 border-[#FF0000]`
      break
    case 'instagram':
      buttonStyle = `${buttonStyle} text-[#E4405F] bg-transparent border-[1px] flex gap-1 border-[#E4405F]`
      break
    case 'secondary':
      buttonStyle = `${buttonStyle} text-blue bg-transparent border-[1px] flex gap-1 border-[#BCDCFF]`
      break
    case 'blog':
      buttonStyle = `${buttonStyle} rounded-full text-blue bg-transparent border-[1px] flex gap-1 border-[#BCDCFF]`
      break
    default:
      buttonStyle = `${buttonStyle} text-white bg-blue`
  }

  // const buttonIcon =
  //   button?.variant === 'youtube' ? (
  //     <YoutubeColored />
  //   ) : button?.variant === 'instagram' ? (
  //     <InstagramColored />
  //   ) : null

  return (
    <>
      {button?.url ? (
        <Link
          to={button?.url}
          className={cn(buttonStyle, className)}
          {...props}
        >
          {children}
        </Link>
      ) : (
        <button className={cn(buttonStyle, className)} {...props}>
          {children}
        </button>
      )}
    </>
  )
}
