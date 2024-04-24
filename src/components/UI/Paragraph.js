import React from 'react'
import ReactMarkdown from 'react-markdown'
import { cn } from '@/lib/helper'

export default function Paragraph({
  children,
  variant = 'full',
  Tag = 'p',
  className,
  ...props
}) {
  let style = 'text-[0.938rem] leading-6  text-[#3D3D3D] '
  switch (variant) {
    case 'full':
      style = `${style}`
      break
    case 'center':
      style = `${style} w-[50rem] mx-auto`
  }
  return (
    <Tag
      dangerouslySetInnerHTML={{ __html: children }}
      className={cn(style, className)}
      {...props}
    />
  )
}
