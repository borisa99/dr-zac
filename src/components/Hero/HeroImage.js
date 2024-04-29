import React from 'react'
import Image from '@/resolvers/Image'

export default function HeroImage({ data, isFull }) {
  return (
    <>
      {data?.photo2?.image && (
        <div className="h-full w-full justify-center md:flex">
          <Image
            src={data?.photo2?.image}
            alt={data?.photo2?.alt}
            className="z-10 h-auto w-full max-w-[37.5rem] xl:w-[37.5rem]"
          />
        </div>
      )}
      {isFull && (
        <div className="absolute bottom-0 right-0 h-[14rem] w-[60%] rounded-tl-[6rem] bg-blue xl:h-[25.625rem] xl:w-[40%] xl:rounded-tl-[12.844rem]" />
      )}
    </>
  )
}
