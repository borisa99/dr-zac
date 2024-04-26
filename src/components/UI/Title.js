import React from 'react'
import { cn } from '@/lib/helper'

export default function Title({
  children,
  variant = 'hero',
  Tag = 'h2',
  className,
  ...props
}) {
  let style = 'leading-[5rem] text-textMain'
  switch (variant) {
    case 'hero':
      style = `${style} tracking-tight text-5xl  xl:text-7xl  text-center xl:text-left title-font`
      break
    case 'heading':
      style = `${style} tracking-tighter text-4xl title-font`
      break
    case 'article':
      style = `${style} text-[1.25rem] xl:text-[2rem] tracking-tight leading-10`
      break
    case 'article-variant':
      style = `${style} text-[1.25rem] -tracking-[0.3px] leading-10`
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
