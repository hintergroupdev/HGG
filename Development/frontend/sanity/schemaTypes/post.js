import { defineField, defineType } from 'sanity';

export const post = defineType({
  name: 'post',
  title: 'Insights & News Articles',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Article Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'date',
      options: {
        dateFormat: 'MMMM YYYY',
      },
      initialValue: () => new Date().toISOString().split('T')[0],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Publication Stream Category',
      type: 'reference',
      to: [{ type: 'category' }],
    }),
    defineField({
      name: 'isApproved',
      title: 'HGG Editorial Approval (Cleared for Public Release)',
      type: 'boolean',
      description: 'Must be explicitly toggled ON to authorize public website display. Keep OFF for drafts under HGG executive review.',
      initialValue: true,
    }),
    defineField({
      name: 'author',
      title: 'Author / Contributor',
      type: 'reference',
      to: [{ type: 'leadershipMember' }],
    }),
    defineField({
      name: 'mainImage',
      title: 'Featured Header Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Article Summary / Excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Article Full Body',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'tags',
      title: 'Tags & Subject Keywords',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'featured',
      title: 'Featured On Homepage',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      date: 'publishedAt',
    },
    prepare({ title, author, media, date }) {
      return {
        title,
        subtitle: `${date ? date : 'Draft'} ${author ? `• by ${author}` : ''}`,
        media,
      };
    },
  },
});
