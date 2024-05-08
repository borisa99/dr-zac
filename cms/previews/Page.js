import React from 'react'
import PageBuilder from '../../src/components/PageBuilder'
import Spinner from '@/components/UI/Spinner'

export default class PagePreview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      media: [],
      videos: [],
      authors: [],
      loading: true,
    }
  }
  componentDidMount() {
    Promise.all([
      fetch('/posts.json').then((res) => res.json()),
      fetch('/media.json').then((res) => res.json()),
      fetch('/videos.json').then((res) => res.json()),
      fetch('/authors.json').then((res) => res.json()),
    ])
      .then(([posts, media, videos, authors]) => {
        this.setState({
          posts,
          media,
          videos,
          authors,
          loading: false,
        })
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        this.setState({ loading: false })
      })
  }

  render() {
    const { posts, media, videos, authors, loading } = this.state
    const blocks = this.props.widgetsFor('blocks').toJS()

    if (loading) {
      return <Spinner />
    }

    const blocksUpdated = blocks.map((block) => {
      switch (block.data.type) {
        case 'blog':
          return {
            ...block.data,
            posts: block.data.posts
              ? posts.filter((post) => block.data.posts.includes(post.id))
              : [],

            allPosts: posts || [],
            authors: authors || [],
          }
        case 'media':
          return {
            ...block.data,
            media:
              media.filter((med) => block.data.media?.includes(med.id)) || [],
          }
        case 'video':
          return {
            ...block.data,
            videos:
              videos.filter((vid) => block.data.videos?.includes(vid.id)) || [],
          }
        default:
          return block.data
      }
    })

    console.log(videos)
    console.log(blocks)

    return (
      <div>
        {blocksUpdated.length > 0 ? (
          <>
            <PageBuilder blocks={blocksUpdated} preview={true} />
          </>
        ) : (
          <div className="flex items-center justify-center py-24 text-center">
            <h1>Add first block to start creating your website</h1>
          </div>
        )}
      </div>
    )
  }
}
