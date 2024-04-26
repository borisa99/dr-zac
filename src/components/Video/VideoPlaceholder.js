import React from 'react'
import ButtonPlay from '@/assets/Icons/ButtonPlay.svg'
import Image from '@/resolvers/Image'

export default function VideoPlaceholder({ data, onIsPlaying }) {
  return (
    <>
      <div className="absolute inset-0 z-20">
        {data?.photo?.image && (
          <div className="relative h-[41.25rem] w-full rounded-[1.25rem]">
            <Image
              src={data?.photo?.image}
              alt={data?.photo?.alt}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => onIsPlaying(true)}
                className="duration-300 ease-in hover:scale-110 active:scale-90"
                aria-label="Play Video"
              >
                <ButtonPlay />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
