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
      title: 'Official Corporate Email (Stationery Source)',
      description: 'Official corporate email as shown on approved stationery (e.g., info@hintergroupghana.com)',
      type: 'string',
      initialValue: 'info@hintergroupghana.com',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Primary Ghana Telephone Number (Stationery Source)',
      description: 'Official primary Ghana phone number as shown on approved corporate stationery',
      type: 'string',
      initialValue: '+233 (0) 30 200 0000',
    }),
    defineField({
      name: 'contactPhoneAlt',
      title: 'Secondary / Direct Ghana Telephone Number (Optional)',
      description: 'Alternative Ghana phone line, mobile, or direct executive line',
      type: 'string',
    }),
    defineField({
      name: 'officeAddress',
      title: 'Physical Corporate Office Address (Stationery Source)',
      description: 'Physical corporate headquarters address as shown on approved stationery',
      type: 'text',
      rows: 3,
      initialValue: '2nd Floor, The Octagon, Block D, Central Avenue, Accra, Ghana',
    }),
    defineField({
      name: 'corporatePostalAddress',
      title: 'Postal / Mailing Address (P.O. Box) (Optional)',
      description: 'Official postal address as shown on stationery (if distinct from physical office)',
      type: 'string',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn Corporate Page URL',
      type: 'url',
    }),
    defineField({
      name: 'twitterUrl',
      title: 'X (Twitter) Profile URL',
      type: 'url',
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Facebook Page URL',
      type: 'url',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram Profile URL (Optional)',
      type: 'url',
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube Channel URL (Optional)',
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
