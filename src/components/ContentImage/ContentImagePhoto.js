import React from 'react'
import Image from '@/resolvers/Image'

export default function ContentImagePhoto({ data }) {
  return (
    <div>
      {data?.photo?.image && (
        <Image
          src={data?.photo?.image}
          alt={data?.photo?.alt}
          className="w-full max-w-[37.5rem] rounded-[1.25rem]"
        />
      )}
    </div>
  )
}
