import React, { useMemo, useState, useEffect } from 'react'
import ReactPlayer from 'react-player/youtube'
import VideoPlaceholder from './VideoPlaceholder'

export default function VideoPlayer({ data }) {
  const [isPlaying, setIsPlaying] = useState(false)

  const videoUrl = useMemo(
    () => data?.permalink ?? data?.node?.frontmatter.permalink,
    [data],
  )

  return (
    <>
      <div
        className={`relative mx-auto flex h-full w-full max-w-[40rem] justify-center overflow-hidden rounded-[1.25rem] pt-[52.25%] xl:max-w-full`}
      >
        <iframe
          src={videoUrl}
          className={`absolute inset-0 rounded-[1.25rem] ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
          width="100%"
          height="100%"
          allow="autoplay"
        />

        {!isPlaying && (
          <VideoPlaceholder onIsPlaying={setIsPlaying} data={data} />
        )}
      </div>
    </>
  )
}
