import { defineField, defineType } from 'sanity';

export const legalPage = defineType({
  name: 'legalPage',
  title: 'Legal Pages (Privacy & Terms)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
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
      name: 'categoryLabel',
      title: 'Category / Tag Badge',
      type: 'string',
      description: 'e.g. "LEGAL & COMPLIANCE" or "DATA GOVERNANCE"',
      initialValue: 'LEGAL & COMPLIANCE',
    }),
    defineField({
      name: 'effectiveDate',
      title: 'Effective Date',
      type: 'string',
      description: 'e.g. "August 2026"',
    }),
    defineField({
      name: 'leadText',
      title: 'Lead / Header Summary',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'sections',
      title: 'Document Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'legalSection',
          title: 'Section',
          fields: [
            defineField({
              name: 'sectionId',
              title: 'Section Anchor ID',
              type: 'string',
              description: 'e.g. "sec-1", "sec-2" (used for table of contents jump links)',
            }),
            defineField({
              name: 'title',
              title: 'Section Title',
              type: 'string',
              description: 'e.g. "1. Scope & Application"',
            }),
            defineField({
              name: 'summary',
              title: 'Brief Subtitle / Key Focus',
              type: 'string',
            }),
            defineField({
              name: 'content',
              title: 'Section Content (Rich Text)',
              type: 'array',
              of: [{ type: 'block' }],
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'sectionId',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'effectiveDate',
    },
  },
});
