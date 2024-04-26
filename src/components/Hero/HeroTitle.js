import React from 'react'
import Title from '@/components/UI/Title'

export default function HeroTitle({ data }) {
  return (
    <>
      {data?.title && (
        <Title
          Tag="h1"
          variant="hero"
          className="mb-3"
          children={data?.title}
        />
      )}
    </>
  )
}
