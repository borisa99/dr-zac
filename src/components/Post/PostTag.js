import React from 'react'

const PostTag = ({ data }) => {
  return (
    <div className="mb-5 flex flex-wrap justify-center gap-2 xl:justify-start">
      {data.post.frontmatter.tags &&
        data.post.frontmatter.tags.map((tag, i) => {
          return (
            <p
              key={i}
              className="text-blue-500 flex cursor-pointer gap-1 rounded-full border-[1px] border-[#BCDCFF] bg-transparent px-5 py-4 text-[0.813rem] uppercase"
            >
              {tag}
            </p>
          )
        })}
    </div>
  )
}
export default PostTag
