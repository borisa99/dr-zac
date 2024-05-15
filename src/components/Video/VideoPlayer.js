import React, { useMemo, useState } from 'react'
import VideoPlaceholder from './VideoPlaceholder'

export default function VideoPlayer({ data, single = false }) {
  const [isPlaying, setIsPlaying] = useState(false)

  const videoUrl = useMemo(
    () => data?.permalink ?? data?.frontmatter.permalink,
    [data],
  )

  return (
    <>
      <div
        className={`relative mx-auto flex aspect-video w-full justify-center overflow-hidden rounded-[1.25rem]`}
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
          <VideoPlaceholder
            onIsPlaying={setIsPlaying}
            data={data}
            single={single}
          />
        )}
      </div>
    </>
  )
}
