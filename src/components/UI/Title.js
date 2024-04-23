import React from 'react'
import { cn } from '@/lib/helper'

export default function Title({
  children,
  variant = 'base',
  Tag = 'h2',
  className,
  ...props
}) {
  let style = ''
  switch (variant) {
    case 'hero':
      style = `${style} text-7xl leading-[5rem] tracking-tight text-textMain`
      break
    case 'xl':
      style = `${style} text-4xl md:text-5xl`
      break
    case 'lg':
      style = `${style} text-3xl md:text-4xl`
      break
    case 'base':
    default:
      style = `${style} text-2xl md:text-3xl`
      break
    case 'sm':
      style = `${style} text-2xl`
      break
    case 'xs':
      style = `${style} text-xl`
      break
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
