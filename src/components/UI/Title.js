import React from 'react'
import { cn } from '@/lib/helper'

export default function Title({
  children,
  variant = 'hero',
  Tag = 'h2',
  className,
  ...props
}) {
  let style = 'leading-[5rem] text-black'
  switch (variant) {
    case 'hero':
      style = `${style} text-6xl lg:text-7xl xl:text-8xl title-font`
      break
    case 'heading':
      style = `${style} text-4xl title-font`
      break
    case 'article':
      style = `${style} text-[1.25rem] xl:text-[2rem] tracking-tight`
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
