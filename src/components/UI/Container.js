import React from 'react'
import { cn } from '@/lib/helper'

export default function Container({ children, className }) {
  return (
    <div className={cn('container mx-auto max-w-[76.5rem] px-4', className)}>
      {children}
    </div>
  )
}
