import { defineField, defineType } from 'sanity';

export const industry = defineType({
  name: 'industry',
  title: 'Sectors of Focus',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Sector Name',
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
      name: 'order',
      title: 'Display Order (1-9)',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Overview',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'fullLead',
      title: 'Detailed Strategic Scope',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'focusAreas',
      title: 'Strategic Priorities & Focus Areas',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'hggRole',
      title: 'HGG Value Proposition & Role',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'color',
      title: 'Accent Color Hex',
      type: 'string',
      initialValue: '#0A2457',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'order',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: `Priority Corridor #${subtitle}`,
      };
    },
  },
});
