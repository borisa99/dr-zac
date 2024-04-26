import React from 'react'
import Title from '@/components/UI/Title'
import { cn } from '@/lib/helper'

export default function HeroTitle({ data, isCentered }) {
  return (
    <>
      {data?.title && (
        <Title
          Tag="h1"
          variant="hero"
          children={data?.title}
          className={cn('mb-3', { 'xl:text-center': isCentered })}
        />
      )}
    </>
  )
}
