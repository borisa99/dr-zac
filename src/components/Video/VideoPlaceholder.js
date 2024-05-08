import React from 'react'
import buttonPlay from '@/assets/Images/Icons/iconPlay.png'
import Image from '@/resolvers/Image'

export default function VideoPlaceholder({ data, onIsPlaying }) {
  return (
    <>
      <div className="absolute inset-0 z-20 w-full  xl:h-[41.25rem]">
        {data?.photo?.image && (
          <div className="relative h-auto w-full xl:h-full">
            <Image
              src={data?.photo?.image}
              alt={data?.photo?.alt}
              className="h-full w-full rounded-[1.25rem] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => onIsPlaying(true)}
                className="scale-50 duration-300 ease-in hover:scale-110 active:scale-90 xl:scale-100"
                aria-label="Play Video"
              >
                <Image alt="Button play" src={buttonPlay} />
              </button>
            </div>
          </div>
        )}

        {(data?.frontmatter?.thumbnail || data.thumbnail) && (
          <div className="relative h-[16.375rem] w-full rounded-xl xl:w-[24.5rem]">
            <Image
              src={
                data.thumbnail
                  ? data?.thumbnail?.childImageSharp?.gatsbyImageData?.images
                      .fallback.src
                  : data.frontmatter.thumbnail
              }
              alt={data.title ? data.title : data.frontmatter.title}
              className="h-full w-full rounded-xl object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => onIsPlaying(true)}
                className="duration-300 ease-in hover:scale-110 active:scale-90"
                aria-label="Play Video"
              >
                <Image alt="Button play" src={buttonPlay} />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
