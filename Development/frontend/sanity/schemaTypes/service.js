import { defineField, defineType } from 'sanity';

export const service = defineType({
  name: 'service',
  title: 'Service Offerings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Pillar Name',
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
      title: 'Display Priority Order (1, 2, 3)',
      type: 'number',
      initialValue: 1,
    }),
    defineField({
      name: 'tagline',
      title: 'Short Tagline',
      type: 'string',
    }),
    defineField({
      name: 'shortSummary',
      title: 'Executive Summary',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name / Key',
      type: 'string',
      description: 'e.g. Compass, Rocket, Briefcase, Building2',
    }),
    defineField({
      name: 'mainImage',
      title: 'Pillar Illustration / Feature Image',
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
      ],
    }),
    defineField({
      name: 'capabilities',
      title: 'Core Capabilities & Modules',
      type: 'array',
      of: [
        defineField({
          name: 'capability',
          type: 'object',
          fields: [
            { name: 'number', title: 'Module Number (e.g. 01)', type: 'string' },
            { name: 'title', title: 'Module Title', type: 'string' },
            { name: 'description', title: 'Detailed Explanation', type: 'text', rows: 3 },
          ],
        }),
      ],
    }),
    defineField({
      name: 'processTitle',
      title: 'Execution Process Title',
      type: 'string',
    }),
    defineField({
      name: 'process',
      title: 'Disciplined Execution Steps',
      type: 'array',
      of: [
        defineField({
          name: 'step',
          type: 'object',
          fields: [
            { name: 'stage', title: 'Stage Name (e.g. UNDERSTAND)', type: 'string' },
            { name: 'desc', title: 'Stage Description', type: 'text' },
          ],
        }),
      ],
    }),
    defineField({
      name: 'valueStatement',
      title: 'Value Statement',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'ctaText',
      title: 'Call to Action Text',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tagline',
      media: 'mainImage',
    },
  },
});
