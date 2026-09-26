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
      initialValue: 'Consulting + Ventures | Business Brokerage • Committed to Excellence',
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
      title: 'Primary Ghana Telephone Number (Head Office)',
      description: 'Official primary Ghana phone number as shown on approved corporate stationery',
      type: 'string',
      initialValue: '+233 55 523 9544',
    }),
    defineField({
      name: 'contactPhoneAlt',
      title: 'Secondary Ghana Telephone Number',
      description: 'Secondary official corporate telephone line',
      type: 'string',
      initialValue: '+233 24 332 3339',
    }),
    defineField({
      name: 'contactPhoneTertiary',
      title: 'Additional / Direct Ghana Telephone Number',
      description: 'Additional direct line or alternative corporate phone line',
      type: 'string',
      initialValue: '+233 24 426 5432',
    }),
    defineField({
      name: 'officeAddress',
      title: 'Physical Corporate Head Office Address (Stationery Source)',
      description: 'Physical corporate headquarters address as shown on approved stationery',
      type: 'text',
      rows: 4,
      initialValue: '8 Teinor Street\nDzorwulu, Accra\nGA-158-3464\nGhana',
    }),
    defineField({
      name: 'corporatePostalAddress',
      title: 'Postal / Mailing Address (P.O. Box)',
      description: 'Official mailing address as shown on approved stationery',
      type: 'text',
      rows: 3,
      initialValue: 'P.O. Box GP2951\nAccra Central\nAccra, Ghana',
    }),
    defineField({
      name: 'websiteUrl',
      title: 'Official Corporate Website URL',
      description: 'Official public web address (e.g. https://www.hintergroupghana.com)',
      type: 'url',
      initialValue: 'https://www.hintergroupghana.com',
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
