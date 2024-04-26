import React, { useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import VideoPlaceholder from './VideoPlaceholder'

export default function VideoPlayer({ data }) {
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <>
      <div className="relative rounded-[1.25rem] pt-[52.25%]">
        <ReactPlayer
          width="100%"
          height="100%"
          url="https://www.youtube.com/watch?v=Ao1n4G3mVdo"
          playsinline
          playing={isPlaying}
          controls
          //   onPause={() => setIsPlaying(false)}
          className="absolute inset-0 rounded-[1.25rem]"
        />
        {!isPlaying && (
          <VideoPlaceholder onIsPlaying={setIsPlaying} data={data} />
        )}
      </div>
    </>
  )
}
