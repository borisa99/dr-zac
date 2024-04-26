import React from 'react'
import Buttons from '@/components/UI/Buttons'
import Title from '@/components/UI/Title'
import { cn } from '@/lib/helper'

export default function BlogHeroTitle({ data }) {
  const isVariantLarge = data?.variant === 'blog-1'
  const isVariantSmall = data?.variant === 'blog-2'

  return (
    <div className="mb-4 flex w-full items-center justify-between">
      {data?.title ? <Title variant="article" children={data?.title} /> : null}
      {(isVariantSmall || isVariantLarge) && data?.buttons ? (
        <Buttons buttons={data?.buttons} className={cn('')} />
      ) : null}
    </div>
  )
}
