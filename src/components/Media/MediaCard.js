import React from 'react'
import MediaCardImage from './MediaCardImage'
import Title from '@/components/UI/Title'
import Link from '@/resolvers/Link'

export default function MediaCard({ data }) {
  return (
    <Link internal="false" to={data.node.frontmatter.permalink}>
      <MediaCardImage data={data} />
      <Title
        Tag="h3"
        variant="article-variant"
        children={data.node.frontmatter.title}
        className="mt-6 text-left"
      />
    </Link>
  )
}
