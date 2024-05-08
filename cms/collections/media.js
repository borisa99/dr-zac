import { ID } from '../fields'

const collection = {
  name: 'media',
  label: 'Media',
  editor: {
    preview: false,
  },
  description: 'Media',
  folder: 'content/media',
  slug: '{{slug}}',
  summary: '{{title}}',
  create: true,
  fields: [
    ID,
    {
      label: 'Type',
      name: 'type',
      widget: 'hidden',
      default: 'media',
    },
    {
      label: 'Name',
      name: 'title',
      widget: 'string',
      default: '',
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
