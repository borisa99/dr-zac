// src/cms/previews/PostPreview.js
import React from 'react'

export default class PagePreview extends React.Component {
  render() {
    // Extract data using widgetsFor for structured content similar to your form and page previews
    const postContent = this.props.widgetsFor('body').toJS() // Assuming 'body' is structured content; adjust if it's plain text
    const title = this.props.entry.getIn(['data', 'title'])
    const tags = this.props.entry.getIn(['data', 'tags']).toArray()
    const excerpt = this.props.entry.getIn(['data', 'excerpt'])
    const author = this.props.entry.getIn(['data', 'author'])

    // Check if the structured content has blocks
    let hasContent = Array.isArray(postContent)
    let contentUpdated = []
    if (hasContent) {
      contentUpdated = postContent.map((block) => block.data)
    }

    return (
      <div className="mx-auto max-w-2xl py-24">
        <h1>{title}</h1>
        <h2>{excerpt}</h2>
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
        <div className="author">Written by: {author}</div>
        {hasContent ? (
          <div>
            {contentUpdated.map((content, index) => (
              <div key={index} dangerouslySetInnerHTML={{ __html: content }} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center py-24 text-center">
            <h1>No content available</h1>
          </div>
        )}
      </div>
    )
  }
}
