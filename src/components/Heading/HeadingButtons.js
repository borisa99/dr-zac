import React from 'react'
import Buttons from '@/components/UI/Buttons'

export default function HeadingButtons({ data }) {
  return (
    <>
      {data?.buttons && (
        <Buttons
          buttonClassName="w-[10.313rem]"
          buttons={data?.buttons}
          className="justify-center"
        />
      )}
    </>
  )
}
