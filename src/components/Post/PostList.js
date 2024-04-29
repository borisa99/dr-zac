import React, { useMemo, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PostCard from '@/components/Post/PostCard'
import { UsePosts } from '@/hooks/UsePosts'

export default function PostList({ isVariant, preview }) {
  // const filterTag = useMemo(() => {
  //   posts.forEach((post) => {
  //     console.log(post.node.frontmatter.tags)
  //   })
  // }, [posts])

  // const posts = UsePosts()

  // return postsData.json()

  // const data = useStaticQuery(graphql`
  //   query PostsQuery {
  //     allMarkdownRemark(filter: { frontmatter: { type: { eq: "post" } } }) {
  //       nodes {
  //         frontmatter {
  //           type
  //           title
  //           permalink
  //           excerpt
  //           thumbnail {
  //             childImageSharp {
  //               gatsbyImageData(
  //                 width: 200
  //                 quality: 71
  //                 layout: FULL_WIDTH
  //                 formats: [AUTO, WEBP, AVIF]
  //               )
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      {preview ? (
        'Articles will show up here'
      ) : (
        <div>
          {/* {isVariant && posts.nodes.length > 0 && (
            <PostCard variant="1" key={0} data={posts[0]} />
          )}

          <div className="flex flex-col gap-[10rem] gap-y-12  md:flex-row md:gap-x-[1vw]">
            {posts.nodes.length > 0 &&
              posts.nodes.map((item, i) => {
                return <PostCard variant="2" key={i} data={item} />
              })}
          </div> */}
        </div>
      )}
    </>
  )
}
