import React, { useEffect, useState } from 'react'
import instagram from '@/assets/Images/socials/instagramColored.png'
import youtube from '@/assets/Images/socials/youtubeColored.png'
import { useLocation } from '@reach/router'
import { cn } from '@/lib/helper'
import Image from '@/resolvers/Image'
import Link from '@/resolvers/Link'

export default function Button({ className, button, children, ...props }) {
  const location = useLocation()
  const [isActiveBlogCat, setIsActiveBlogCat] = useState('')

  useEffect(() => {
    const url =
      location.search === button?.url.replace('/blog/', '')
        ? 'text-[#BCDCFF]  bg-blue border-transparent'
        : 'text-blue bg-transparent'

    setIsActiveBlogCat(url)
  }, [button, location])

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
      buttonStyle = `${buttonStyle} rounded-full  border-[1px] flex gap-1 border-[#BCDCFF] ${isActiveBlogCat}`
      break
    default:
      buttonStyle = `${buttonStyle} text-white bg-blue`
  }

  const buttonIcon =
    button?.variant === 'youtube' ? (
      <Image alt="Youtube icon" src={youtube} />
    ) : button?.variant === 'instagram' ? (
      <Image alt="Instagram icon" src={instagram} />
    ) : null

  return (
    <>
      {button?.url ? (
        <Link
          to={button?.url}
          className={cn(buttonStyle, className)}
          {...props}
        >
          {buttonIcon} {children}
        </Link>
      ) : (
        <button className={cn(buttonStyle, className)} {...props}>
          {children}
        </button>
      )}
    </>
  )
}
