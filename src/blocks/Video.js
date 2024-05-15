import React from 'react'
import Container from '@/components/UI/Container'
import Section from '@/components/UI/Section'
import VideoCard from '@/components/Video/VideoCard'
import VideoPlayer from '@/components/Video/VideoPlayer'

export default function Video({ data }) {
  const isHomepage = data.variant === 'homepage'

  return (
    <Section
      settings={data?.settings}
      className="bg-white pb-16 xl:pt-[7.063rem]"
    >
      <Container className="w-full">
        {/* Video homepage block */}
        <div> {isHomepage && <VideoPlayer data={data} single />}</div>

        {/* Video page block list */}
        {!isHomepage && data.videos.length > 0 && (
          <div className="grid grid-cols-1 gap-x-6 gap-y-[5.563rem] lg:grid-cols-2 xl:grid-cols-3">
            {data.videos.map((videoData, index) => {
              return <VideoCard data={videoData} key={index} />
            })}
          </div>
        )}
      </Container>
    </Section>
  )
}
