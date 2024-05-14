import { ID } from '../fields'

const collection = {
  name: 'authors',
  label: 'Authors',
  editor: {
    preview: false,
  },
  description: 'Blog Authors',
  folder: 'content/authors',
  slug: '{{slug}}',
  summary: '{{name}}',
  create: true,
  fields: [
    ID,
    {
      label: 'Type',
      name: 'type',
      widget: 'hidden',
      default: 'author',
    },
    {
      label: 'Name',
      name: 'name',
      widget: 'string',
      default: '',
    },
    {
      label: 'Featured Image',
      name: 'thumbnail',
      widget: 'image',
      default: '',
      required: false,
    },
    {
      label: 'Description',
      name: 'body',
      widget: 'markdown',
      default: '',
      required: false,
    },
  ],
}

export default collection
