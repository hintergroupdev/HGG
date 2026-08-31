import { defineField, defineType } from 'sanity';

export const leadershipMember = defineType({
  name: 'leadershipMember',
  title: 'Leadership & Governance',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Official Title / Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Leadership Tier',
      type: 'string',
      options: {
        list: [
          { title: 'Executive Leadership', value: 'executive' },
          { title: 'Board of Directors', value: 'board' },
          { title: 'Advisory Council', value: 'advisory' },
        ],
      },
      initialValue: 'executive',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Priority Order',
      type: 'number',
      initialValue: 10,
    }),
    defineField({
      name: 'portrait',
      title: 'Approved Portrait Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'shortBio',
      title: 'Short Executive Summary',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'fullBiography',
      title: 'Full Biography',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'principles',
      title: 'Core Focus & Responsibilities',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn Profile URL',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'portrait',
    },
  },
});
