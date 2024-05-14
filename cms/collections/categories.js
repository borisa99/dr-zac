import { ID } from '../fields'
import PermalinkField from '../fields/permalink-field'

const collection = {
  name: 'categories',
  label: 'Categories',
  editor: {
    preview: false,
  },
  description: 'Blog categories',
  folder: 'content/categories',
  slug: '{{slug}}',
  summary: '{{name}}',
  create: true,
  fields: [
    ID,
    {
      label: 'Type',
      name: 'type',
      widget: 'hidden',
      default: 'category',
    },
    {
      label: 'Name',
      name: 'name',
      widget: 'string',
      default: '',
    },
    PermalinkField('/blog/category/'),
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
