import CMS from 'decap-cms-app'
import { Widget as UuidWidget } from 'netlify-cms-widget-id'
import { Widget as PermalinkWidget } from 'netlify-cms-widget-permalink'
import authors from './collections/authors'
import categories from './collections/categories'
import forms from './collections/forms'
import media from './collections/media'
import pages from './collections/pages'
import posts from './collections/posts'
import settings from './collections/settings'
import videos from './collections/videos'
import FormPreview from './previews/FormPreview'
import PagePreview from './previews/Page'
import PostPreview from './previews/PostPreview'

const config = {
  config: {
    load_config_file: false,
    display_url: process.env.GATSBY_APP_URL,
    // local_backend: true,
    backend: {
      name: 'git-gateway',
      branch: 'main',
    },
    slug: {
      encoding: 'ascii',
      clean_accents: true,
    },
    media_folder: '/static/img',
    public_folder: '/img',
    collections: [
      pages,
      posts,
      categories,
      authors,
      forms,
      settings,
      media,
      videos,
    ],
  },
}

CMS.registerPreviewStyle('../commons.css')
CMS.registerPreviewTemplate('pages', PagePreview)
CMS.registerPreviewTemplate('forms', FormPreview)
// CMS.registerPreviewTemplate('blog', PostPreview)

const injectCustomStyle = () => {
  const style = document.createElement('style')
  style.innerHTML = `
    div[data-slate-editor] {
      -webkit-user-modify: read-write !important;
    }
  `
  document.head.appendChild(style)
}

injectCustomStyle()

CMS.registerWidget(UuidWidget)
CMS.registerWidget(PermalinkWidget)

CMS.init(config)
