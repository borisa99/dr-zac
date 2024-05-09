import { ID } from '../fields'
import { PermalinkField } from '../fields/permalink-field'
import seo from '../fields/seo'

const collection = {
  name: 'blog',
  label: 'Posts',
  editor: {
    preview: true,
  },
  description: 'Blog posts collection',
  folder: 'content/blog',
  slug: '{{slug}}',
  summary:
    "{{title}} - {{date | date('YYYY-MM-DD')}} – {{body | truncate(40, '***')}}",
  create: true,
  fields: [
    ID,
    {
      label: 'Type',
      name: 'type',
      widget: 'hidden',
      default: 'post',
    },
    {
      label: 'Layout',
      name: 'layout',
      widget: 'hidden',
      default: 'post',
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      default: '',
    },
    {
      label: 'Tags',
      name: 'tags',
      widget: 'select',
      options: ['MEDICAL', 'AESTHETICS', 'DIET & EXERCISE', 'LIFESTYLE'],
      multiple: true,
      default: 'MEDICAL',
      required: false,
    },
    PermalinkField('blog'),
    {
      label: 'Featured Image',
      name: 'thumbnail',
      widget: 'image',
      default: '',
      required: false,
    },
    {
      label: 'Date',
      name: 'date',
      widget: 'datetime',
      default: '',
      required: false,
    },
    {
      label: 'Author',
      name: 'author',
      widget: 'relation',
      collection: 'authors',
      default: '',
      search_fields: ['title'],
      display_fields: ['title'],
      value_field: 'id',
      required: false,
    },
    {
      label: 'Excerpt',
      name: 'excerpt',
      widget: 'markdown',
      default: '',
      required: false,
    },
    {
      label: 'Body',
      name: 'body',
      widget: 'markdown',
      default: '',
      required: false,
    },
    seo,
  ],
}

export default collection
