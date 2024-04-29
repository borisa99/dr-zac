import { ID } from '../fields'

const collection = {
  name: 'videos',
  label: 'Videos',
  editor: {
    preview: false,
  },
  description: 'Videos',
  folder: 'content/videos',
  slug: '{{slug}}',
  summary: '{{title}}',
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
      name: 'title',
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
      name: 'excerpt',
      widget: 'string',
      default: '',
      required: false,
    },
    {
      label: 'Link',
      name: 'permalink',
      widget: 'string',
      default: '',
      required: false,
    },
  ],
}

export default collection
