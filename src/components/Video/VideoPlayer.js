import React, { useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import VideoPlaceholder from './VideoPlaceholder'

export default function VideoPlayer({ data }) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <>
      <div className={`relative h-full w-full rounded-[1.25rem] pt-[52.25%]`}>
        <div className={` ${isPlaying ? 'opacity-100' : 'opacity-0'}`}>
          <ReactPlayer
            width="100%"
            height="100%"
            url={data?.url ?? data.node.frontmatter.permalink}
            playsinline
            playing={isPlaying}
            controls
            //   onPause={() => setIsPlaying(false)}
            className={`absolute inset-0`}
          />
        </div>
        {!isPlaying && (
          <VideoPlaceholder onIsPlaying={setIsPlaying} data={data} />
        )}
      </div>
    </>
  )
}
