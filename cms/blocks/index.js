import {
  Buttons,
  Title,
  Content,
  SelectField,
  ImageField,
  SettingsGroup,
} from '../fields'

const Config = {
  label: 'Blocks',
  name: 'blocks',
  widget: 'list',
  types: [
    {
      label: 'Hero',
      name: 'hero',
      widget: 'object',
      summary: '{{fields.title}}',
      fields: [
        Title,
        Content,
        Buttons,
        ImageField(),
        SelectField('default', ['default', 'aside']),
      ],
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'object',
      summary: '{{fields.title}}',
      fields: [Title, Content, Buttons, SettingsGroup],
    },
    {
      label: 'Video',
      name: 'video',
      widget: 'object',
      fields: [
        Title,
        Content,
        ImageField(),
        {
          label: 'Videos',
          name: 'videos',
          widget: 'relation',
          collection: 'videos',
          search_fields: ['id'],
          display_fields: ['title'],
          value_field: 'id',
          multiple: true,
          required: false,
        },
      ],
      SettingsGroup,
    },
    {
      label: 'Media',
      name: 'media',
      widget: 'object',
      fields: [
        Title,
        Content,
        ImageField(),
        {
          label: 'Media',
          name: 'media',
          widget: 'relation',
          collection: 'media',
          search_fields: ['id'],
          display_fields: ['title'],
          value_field: 'id',
          multiple: true,
          required: false,
        },
      ],
    },
    {
      label: 'Content',
      name: 'content',
      widget: 'object',
      fields: [Content, SettingsGroup],
    },
    {
      label: 'Content with Image',
      name: 'content_image',
      widget: 'object',
      summary: '{{fields.title}}',
      fields: [
        ImageField(),
        Title,
        Content,
        Buttons,
        SelectField('default', ['default', 'reversed']),
        SettingsGroup,
      ],
    },
    {
      label: 'Perks',
      name: 'perks',
      summary: '{{fields.title}}',
      widget: 'object',
      fields: [
        {
          label: 'Columns',
          name: 'columns',
          widget: 'list',
          summary: '{{fields.title}}',
          fields: [Title, Content, ImageField()],
        },
        SettingsGroup,
      ],
    },
    {
      label: 'Blog',
      name: 'blog',
      widget: 'object',
      summary: '{{fields.title}}',
      fields: [
        Title,
        {
          label: 'Category',
          name: 'category',
          widget: 'string',
          required: false,
        },
        Content,
        Buttons,
        {
          label: 'Posts',
          name: 'posts',
          widget: 'relation',
          collection: 'blog', // This should match the name of your posts collection
          search_fields: ['title'], // Fields to search for to populate the dropdown
          display_fields: ['{{id}} - {{title}}'], // Fields to display in the dropdown
          value_field: 'id', // Usually the id, but could be any unique aspect of the posts
          multiple: true, // Set to true if you want to allow selection of multiple posts
          required: false,
        },
      ],
    },
    {
      label: 'Form',
      name: 'form',
      widget: 'object',
      summary: '{{fields.form.title}}',
      fields: [
        {
          label: 'Form',
          name: 'form',
          widget: 'relation',
          collection: 'forms',
          search_fields: ['title'],
          display_fields: ['{{id}} - {{title}}'],
          value_field: 'id',
          required: false,
        },
      ],
    },
  ],
}

export default Config
