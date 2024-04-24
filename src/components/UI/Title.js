import React from 'react'
import { cn } from '@/lib/helper'

export default function Title({
  children,
  variant = 'hero',
  Tag = 'h2',
  className,
  ...props
}) {
  let style = ''
  switch (variant) {
    case 'hero':
      style = `${style} text-7xl leading-[5rem] tracking-tight text-textMain`
    case 'heading':
      style = `${style} text-7xl leading-[5rem] tracking-tighter text-textMain`
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
