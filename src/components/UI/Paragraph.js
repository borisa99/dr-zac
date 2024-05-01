import React from 'react'
import { cn } from '@/lib/helper'

export default function Paragraph({
  children,
  variant = 'center',
  Tag = 'p',
  className,
  ...props
}) {
  let style = 'text-[0.938rem] leading-6 text-[#3D3D3D]'
  switch (variant) {
    case 'center':
      style = `${style} xl:ow-[50rem] mx-auto`
      break
    case 'article':
      style = `${style} w-full text-[#545454]`
      break
    case 'article-variant':
      style = `${style} w-full text-[#6D6D6D]`
      break
    case 'post':
      style = `${style} w-full text-[#181818] leading-8`
      break
    default:
      style = `${style} text-center xl:text-left`
      break
  }
  return (
    <Tag
      dangerouslySetInnerHTML={{ __html: children }}
      className={cn(style, className)}
      {...props}
    />
  )
}
