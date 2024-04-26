import React from 'react'
import Image from '@/resolvers/Image'

export default function ContentImagePhoto({ data }) {
  return (
    <div>
      {data?.photo?.image && (
        <Image
          src={data?.photo?.image}
          alt={data?.photo?.alt}
          className="w-full rounded-[1.25rem]"
        />
      )}
    </div>
  )
}
