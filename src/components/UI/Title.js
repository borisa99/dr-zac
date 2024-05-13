import React from 'react'
import { cn } from '@/lib/helper'

export default function Title({
  children,
  variant = 'default',
  Tag = 'h2',
  className,
  ...props
}) {
  let style = 'text-black font-title'
  switch (variant) {
    case 'hero':
      style = `${style} text-6xl lg:text-7xl xl:text-8xl`
      break
    case 'lg':
      style = `${style} text-5xl lg:text-6xl`
      break
    case 'italic':
      style = `${style} text-5xl lg:text-6xl italic`
      break
    case 'default':
      style = `${style} text-3xl lg:text-4xl`
      break
    case 'sm':
      style = `${style} text-2xl lg:text-3xl`
      break
    case 'heading':
      style = `${style} text-4xl font-title`
      break
    case 'article':
      style = `${style} text-2xl`
      break
    case 'article-variant':
      style = `${style} text-[1.25rem] -tracking-[0.3px]`
      break
    default:
      style = `${style}`
      break
  }
  return (
    <>
      {children && (
        <Tag
          dangerouslySetInnerHTML={{ __html: children }}
          className={cn(style, className)}
          {...props}
        />
      )}
    </>
  )
}
