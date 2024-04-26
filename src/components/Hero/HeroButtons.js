import React from 'react'
import Buttons from '@/components/UI/Buttons'
import { cn } from '@/lib/helper'

export default function HeroButtons({ data, isCentered }) {
  return (
    <>
      {data?.buttons && (
        <Buttons
          buttons={data?.buttons}
          className={cn(
            'mt-6 justify-center ',
            {
              'justify-center': isCentered,
            },
            { 'xl:justify-start': !isCentered },
          )}
        />
      )}
    </>
  )
}
