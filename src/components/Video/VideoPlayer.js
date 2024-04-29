import React, { useMemo, useRef, useState } from 'react'
import VideoPlaceholder from './VideoPlaceholder'

export default function VideoPlayer({ data }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const videoUrl = useMemo(
    () => data?.url ?? data.node.frontmatter.permalink,
    [data],
  )

  return (
    <>
      <div className={`relative h-full w-full rounded-[1.25rem] pt-[52.25%]`}>
        <div
          className={`h-full w-full transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
        >
          <video
            ref={videoRef}
            src={videoUrl}
            controls
            className={`absolute inset-0 h-full w-full rounded-[1.25rem] object-cover`}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
        </div>
        {!isPlaying && (
          <VideoPlaceholder onIsPlaying={setIsPlaying} data={data} />
        )}
      </div>
    </>
  )
}
