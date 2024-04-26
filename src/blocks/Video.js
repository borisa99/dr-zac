import React from 'react'
import Container from '@/components/UI/Container'
import Section from '@/components/UI/Section'
import VideoCard from '@/components/Video/VideoCard'
import VideoPlayer from '@/components/Video/VideoPlayer'
import { useVideos } from '@/hooks/useVideos'

export default function Video({ data }) {
  const isHomepage = data.variant === 'homepage'
  const videos = useVideos()

  return (
    <Section settings={data?.settings} className="bg-white pb-16 pt-[7.063rem]">
      <Container className="w-full">
        {/* Video homepage block */}
        {isHomepage && <VideoPlayer data={data} />}

        {/* Video page block list */}
        {!isHomepage && videos.length > 0 && (
          <div className="gap-y- grid grid-cols-3 gap-x-6 gap-y-[5.563rem]">
            {videos.map((videoData, index) => {
              return <VideoCard data={videoData} key={index} />
            })}
          </div>
        )}
      </Container>
    </Section>
  )
}
