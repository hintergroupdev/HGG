import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Global Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Legal Name',
      type: 'string',
      initialValue: 'THE HINTER GROUP GHANA LTD',
    }),
    defineField({
      name: 'tagline',
      title: 'Corporate Tagline',
      type: 'string',
      initialValue: 'Consulting + Ventures | Brokerage • Committed to Excellence',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Official Contact Email',
      type: 'string',
      initialValue: 'info@hintergroupghana.com',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Official Phone Number',
      type: 'string',
      initialValue: '+233 (0) 30 200 0000',
    }),
    defineField({
      name: 'officeAddress',
      title: 'Office / Mailing Address',
      type: 'text',
      rows: 3,
      initialValue: '2nd Floor, The Octagon, Block D, Central Avenue, Accra, Ghana',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn Profile URL',
      type: 'url',
    }),
    defineField({
      name: 'twitterUrl',
      title: 'X (Twitter) Profile URL',
      type: 'url',
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Facebook Profile URL',
      type: 'url',
    }),
    defineField({
      name: 'logo',
      title: 'Company Brand Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'heroImage',
      title: 'Global Hero Landmark Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'defaultOgImage',
      title: 'Default OpenGraph Share Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'companyName',
      subtitle: 'tagline',
      media: 'logo',
    },
  },
});
