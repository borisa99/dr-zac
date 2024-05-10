import React from 'react'
import Title from '@/components/UI/Title'

export default function ContentImageTitle({ data }) {
  return (
    <>
      {data?.title && (
        <Title
          Tag="h2"
          variant="article"
          className="font-400 title-font mb-5 text-center text-[#181818] xl:text-left"
        >
          {data?.title}
        </Title>
      )}
    </>
  )
}
