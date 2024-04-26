import React from 'react'
import Image from '@/resolvers/Image'

export default function HeroImage({ data, isFull }) {
  return (
    <>
      {data?.photo2?.image && (
        <div className="h-full w-full">
          <Image
            src={data?.photo2?.image}
            alt={data?.photo2?.alt}
            className="z-10 h-auto w-[37.5rem]"
          />
        </div>
      )}
      {isFull && (
        <div className="bg-blue absolute bottom-0 right-0 h-[25.625rem] w-[40%] rounded-tl-[12.844rem]" />
      )}
    </>
  )
}
