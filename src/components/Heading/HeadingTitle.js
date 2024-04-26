import React from 'react'
import Title from '@/components/UI/Title'

export default function HeadingTitle({ data }) {
  return (
    <>
      {data?.title && (
        <Title variant="heading" children={data?.title} className="mb-4" />
      )}
    </>
  )
}
