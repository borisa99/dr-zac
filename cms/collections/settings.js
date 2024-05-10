import { SelectField } from '../fields'
import navigationField from '../fields/navigation-field'

const collection = {
  name: 'settings',
  label: 'Settings',
  description: 'Settings for theme',
  files: [
    {
      label: 'Hero block',
      name: 'hero',
      file: 'src/settings/hero.json',
      editor: {
        preview: false,
      },
      fields: [
        {
          label: 'Paddings',
          name: 'paddings',
          widget: 'string',
          required: false,
        },
        {
          label: 'Backgrounds',
          name: 'backgrounds',
          widget: 'string',
          required: false,
        },
      ],
    },
    {
      label: 'Video block',
      name: 'video',
      file: 'src/settings/video.json',
      editor: {
        preview: false,
      },
      fields: [
        {
          label: 'Paddings',
          name: 'paddings',
          widget: 'string',
          required: false,
        },
        {
          label: 'Backgrounds',
          name: 'backgrounds',
          widget: 'string',
          required: false,
        },
      ],
    },
    {
      label: 'Media block',
      name: 'media',
      file: 'src/settings/media.json',
      editor: {
        preview: false,
      },
      fields: [
        {
          label: 'Paddings',
          name: 'paddings',
          widget: 'string',
          required: false,
        },
        {
          label: 'Backgrounds',
          name: 'backgrounds',
          widget: 'string',
          required: false,
        },
      ],
    },
    {
      label: 'Perks block',
      name: 'perks',
      file: 'src/settings/perks.json',
      editor: {
        preview: false,
      },
      fields: [
        {
          label: 'Paddings',
          name: 'paddings',
          widget: 'string',
          required: false,
        },
        {
          label: 'Backgrounds',
          name: 'backgrounds',
          widget: 'string',
          required: false,
        },
      ],
    },
    {
      label: 'Blog block',
      name: 'blog',
      file: 'src/settings/blog.json',
      editor: {
        preview: false,
      },
      fields: [
        {
          label: 'Paddings',
          name: 'paddings',
          widget: 'string',
          required: false,
        },
        {
          label: 'Backgrounds',
          name: 'backgrounds',
          widget: 'string',
          required: false,
        },
      ],
    },
    {
      label: 'Content Image block',
      name: 'contentImage',
      file: 'src/settings/contentImage.json',
      editor: {
        preview: false,
      },
      fields: [
        {
          label: 'Paddings',
          name: 'paddings',
          widget: 'string',
          required: false,
        },
        {
          label: 'Backgrounds',
          name: 'backgrounds',
          widget: 'string',
          required: false,
        },
        {
          label: 'Reversed',
          name: 'reversed',
          widget: 'boolean',
          variant: SelectField(false, [false, true]),
          required: false,
        },
      ],
    },
    {
      label: 'Main Navigation',
      name: 'nav',
      file: 'src/settings/main.json',
      editor: {
        preview: false,
      },
      fields: [navigationField()],
    },
    {
      label: 'Footer Navigation',
      name: 'footer',
      file: 'src/settings/footer.json',
      editor: {
        preview: false,
      },
      fields: [
        navigationField(),
        {
          label: 'Paddings',
          name: 'paddings',
          widget: 'string',
          required: false,
        },
        {
          label: 'Backgrounds',
          name: 'backgrounds',
          widget: 'string',
          required: false,
        },
      ],
    },
    {
      label: 'Site Metadata & SEO Settings',
      name: 'seo',
      file: 'src/settings/seo.json',
      summary: 'Change basic SEO configuration and site meta like URL',
      editor: {
        preview: false,
      },
      fields: [
        {
          label: 'Base title',
          name: 'baseTitle',
          widget: 'string',
          required: false,
        },
        {
          label: 'Separator',
          name: 'separator',
          widget: 'string',
          required: false,
        },
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
          required: false,
        },
        {
          label: 'Description',
          name: 'description',
          widget: 'string',
          required: false,
        },
        {
          label: 'Language Code',
          name: 'lang',
          widget: 'string',
          required: false,
        },
        {
          label: 'Keywords',
          name: 'keyword',
          widget: 'string',
          required: false,
        },
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
          required: false,
        },
        {
          label: 'Twitter Handle',
          name: 'twitterHandle',
          widget: 'string',
          required: false,
        },
        {
          label: 'Theme Color',
          name: 'themeColor',
          widget: 'color',
          required: false,
        },
      ],
    },
  ],
}

export default collection
