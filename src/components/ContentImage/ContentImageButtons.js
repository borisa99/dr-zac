import React from 'react'
import Buttons from '@/components/UI/Buttons'

export default function ContentImageButtons({ data }) {
  return (
    <>{data?.buttons && <Buttons buttons={data?.buttons} className="" />}</>
  )
}
