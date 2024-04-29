import React from 'react'
import Title from '@/components/UI/Title'

export default function ContentImageTitle({ data }) {
  return (
    <>
      {data?.title && (
        <Title
          Tag="h2"
          variant="article"
          className="font-400 title-font mb-5 text-[#181818] "
        >
          {data?.title}
        </Title>
      )}
    </>
  )
}
