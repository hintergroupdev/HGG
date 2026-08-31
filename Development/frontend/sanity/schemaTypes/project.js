import { defineField, defineType } from 'sanity';

export const project = defineType({
  name: 'project',
  title: 'Projects & Strategic Initiatives',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
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
      name: 'sector',
      title: 'Related Sector',
      type: 'reference',
      to: [{ type: 'industry' }],
    }),
    defineField({
      name: 'status',
      title: 'Project Status',
      type: 'string',
      options: {
        list: [
          { title: 'In Development', value: 'in_development' },
          { title: 'Active Facilitation', value: 'facilitation' },
          { title: 'Formalized Partnership', value: 'formalized' },
          { title: 'Completed Initiative', value: 'completed' },
        ],
      },
      initialValue: 'in_development',
    }),
    defineField({
      name: 'confidentialityHold',
      title: 'Confidentiality Hold (Anonymize Public Detail)',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'mainImage',
      title: 'Project Feature / Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ],
    }),
    defineField({
      name: 'summary',
      title: 'Executive Summary',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'narrative',
      title: 'Full Narrative & Overview',
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
      name: 'deliverables',
      title: 'Key Deliverables & Milestones',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'status',
      media: 'mainImage',
    },
  },
});
