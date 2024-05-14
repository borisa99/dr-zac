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
  summary: "{{title}} - {{date | date('YYYY-MM-DD')}}",
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
    PermalinkField('blog'),
    {
      label: 'Categories',
      name: 'categories',
      widget: 'relation',
      collection: 'categories',
      search_fields: ['name'],
      display_fields: ['{{id}} - {{name}}'],
      value_field: 'id',
      multiple: true,
      required: false,
    },
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
      search_fields: ['name'],
      display_fields: ['{{name}}'],
      value_field: 'id',
      required: true,
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
