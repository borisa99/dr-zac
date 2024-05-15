import React from 'react'
import VideoCard from '../components/Video/VideoCard'
import Container from '@/components/UI/Container'
import Section from '@/components/UI/Section'

export default function Media({ data }) {
  return (
    <Section settings={data?.settings} className="bg-white">
      <Container className="w-full">
        {data && data.media.length > 0 && (
          <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-2 xl:grid-cols-3">
            {data.media.map((mediaData, index) => {
              return <VideoCard data={mediaData} variant="media" key={index} />
            })}
          </div>
        )}
      </Container>
    </Section>
  )
}
