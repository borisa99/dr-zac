import Blocks from '../blocks'
import { ID, SelectField } from '../fields'
import { PermalinkField } from '../fields/permalink-field'
import seo from '../fields/seo'

const collection = {
  name: 'pages',
  label: 'Page',
  description: 'Custom pages',
  folder: 'content/pages',
  create: true,
  fields: [
    ID,
    {
      label: 'Type',
      name: 'type',
      widget: 'hidden',
      default: 'page',
    },
    {
      label: 'Layout',
      name: 'layout',
      widget: 'hidden',
      default: 'page-builder',
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
    },
    SelectField('default', ['default', 'light'], 'Header Type', 'header'),
    PermalinkField(),
    Blocks,
    seo,
  ],
}

export default collection
