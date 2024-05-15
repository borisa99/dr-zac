import React from 'react'
import buttonPlay from '@/assets/Images/Icons/iconPlay.png'
import Image from '@/resolvers/Image'

export default function VideoPlaceholder({
  data,
  onIsPlaying,
  single = false,
}) {
  console.log(data)
  const videoID = new URL(
    data?.permalink || data?.frontmatter?.permalink,
  ).pathname
    .split('/')
    .pop()

  return (
    <>
      <div className="absolute inset-0 z-20 aspect-video w-full">
        {!single ? (
          <>
            {data?.frontmatter?.thumbnail || data.thumbnail ? (
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
            ) : (
              <img
                src={`https://i.ytimg.com/vi/${videoID}/hqdefault.jpg`}
                alt="Play video"
                className="h-full w-full object-cover"
              />
            )}
          </>
        ) : (
          <>
            {data?.photo?.image && (
              <Image
                src={data?.photo?.image}
                alt={data?.photo?.alt}
                className="h-full w-full rounded-[1.25rem] object-cover"
              />
            )}
          </>
        )}

        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={() => onIsPlaying(true)}
            className="duration-300 ease-in hover:scale-110 active:scale-90"
            aria-label="Play Video"
          >
            <Image alt="Button play" src={buttonPlay} className="h-16 w-16" />
          </button>
        </div>
      </div>
    </>
  )
}
