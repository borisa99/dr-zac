import React, { useMemo, useState } from 'react'
import VideoPlaceholder from './VideoPlaceholder'

export default function VideoPlayer({ data }) {
  const [isPlaying, setIsPlaying] = useState(false)

  const videoUrl = useMemo(
    () => data?.permalink ?? data?.frontmatter.permalink,
    [data],
  )

  return (
    <>
      <div
        className={`relative mx-auto flex h-full w-full max-w-[40rem] justify-center overflow-hidden rounded-[1.25rem] pt-[52.25%] md:max-w-full`}
      >
        {isPlaying && (
          <iframe
            src={`${videoUrl}?autoplay=1`}
            title="Video player"
            className={`absolute inset-0 rounded-[1.25rem] ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
            allow="autoplay; encrypted-media"
            width="100%"
            height="100%"
          />
        )}
        {!isPlaying && (
          <VideoPlaceholder onIsPlaying={setIsPlaying} data={data} />
        )}
      </div>
    </>
  )
}
