import React from 'react'
import MediaCardImage from './MediaCardImage'
import Title from '@/components/UI/Title'
import Link from '@/resolvers/Link'

export default function MediaCard({ data }) {
  return (
    <Link
      internal="false"
      to={data.permalink ? data.permalink : data.frontmatter.permalink}
    >
      <MediaCardImage data={data} />
      <Title
        Tag="h3"
        variant="article-variant"
        children={data.title ? data.title : data.frontmatter.title}
        className="title-font mt-6 text-left"
      />
    </Link>
  )
}
