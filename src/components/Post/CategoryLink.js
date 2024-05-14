import React from 'react'
import Link from '../../resolvers/Link'

function CategoryLink({ category }) {
  return (
    <Link
      to={category?.frontmatter?.permalink}
      className="flex cursor-pointer gap-1 rounded-full border border-blue-200 px-5 py-3 text-xs font-semibold uppercase text-blue-500 transition-colors duration-300 ease-in-out hover:bg-blue-500 hover:text-white"
      activeClassName="bg-blue-500 text-white"
      dangerouslySetInnerHTML={{
        __html: category?.frontmatter?.name,
      }}
    ></Link>
  )
}

export default CategoryLink
