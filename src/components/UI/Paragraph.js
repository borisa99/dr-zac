import React from 'react'
import { cn } from '@/lib/helper'

export default function Paragraph({
  children,
  variant = 'hero',
  Tag = 'p',
  className,
  ...props
}) {
  let style = ''
  switch (variant) {
    case 'hero':
      style = `${style} text-[0.938rem] leading-6  text-[#3D3D3D]`
      break
    // case 'xl':
    //   style = `${style} text-4xl md:text-5xl`
    //   break
    // case 'lg':
    //   style = `${style} text-3xl md:text-4xl`
    //   break
    // case 'base':
    // default:
    //   style = `${style} text-2xl md:text-3xl`
    //   break
    // case 'sm':
    //   style = `${style} text-2xl`
    //   break
    // case 'xs':
    //   style = `${style} text-xl`
    //   break
  }
  return (
    <>
      {children && (
        <Tag className={cn(style, className)} {...props}>
          {children}
        </Tag>
      )}
    </>
  )
}
