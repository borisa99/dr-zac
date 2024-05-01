import React from 'react'
import Buttons from '@/components/UI/Buttons'
import { cn } from '@/lib/helper'

export default function BlogHeroButtons({ data }) {
  const isHomepage = data?.variant === 'homepage'

  return (
    <>
      {isHomepage && data?.buttons ? (
        <Buttons
          buttons={data?.buttons}
          className={cn('mt-24 justify-center')}
        />
      ) : null}
    </>
  )
}
