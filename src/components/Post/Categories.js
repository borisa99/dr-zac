import React from 'react'
import Link from '../../resolvers/Link'

const Categories = ({ categories, ...props }) => {
  return (
    <div className="mb-5 flex flex-wrap justify-center gap-2 xl:justify-start">
      {categories &&
        categories.map((cat, i) => {
          return (
            <Link
              to={cat.permalink}
              key={i}
              className="flex cursor-pointer gap-1 rounded-full border-[1px] border-[#BCDCFF] bg-transparent px-5 py-4 text-[0.813rem] uppercase text-blue-500"
            >
              {cat.name}
            </Link>
          )
        })}
    </div>
  )
}
export default PostTag
