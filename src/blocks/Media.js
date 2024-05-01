import React from 'react'
import MediaCard from '@/components/Media/MediaCard'
import Container from '@/components/UI/Container'
import Section from '@/components/UI/Section'
import { useMedia } from '@/hooks/useMedia'

export default function Media({ data }) {
  const media = useMedia()

  return (
    <Section settings={data?.settings} className="bg-white pb-16 pt-[7.063rem]">
      <Container className="w-full">
        {data && media.length > 0 && (
          <div className="gap-y- grid grid-cols-1 gap-x-6 gap-y-[5.563rem] md:grid-cols-2 xl:grid-cols-3">
            {media.map((mediaData, index) => {
              return <MediaCard data={mediaData} key={index} />
            })}
          </div>
        )}
      </Container>
    </Section>
  )
}
