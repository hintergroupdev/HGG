import { defineField, defineType } from 'sanity';

export const employeeVerification = defineType({
  name: 'employeeVerification',
  title: 'Employee ID & Verification',
  description: 'Designed to enhance credential authentication. Credential updates are reflected dynamically through the central registry.',
  type: 'document',
  groups: [
    {
      name: 'credential',
      title: 'Public Credential (Card & Verification)',
      default: true,
    },
    {
      name: 'personal',
      title: 'Confidential Personal Info (CMS Only)',
    },
  ],
  fields: [
    // ══════════════════════════════════════════════════════════════════
    // GROUP: PUBLIC CREDENTIAL (Displayed on Verification Card)
    // ══════════════════════════════════════════════════════════════════
    defineField({
      name: 'employeeId',
      title: 'Employee ID',
      type: 'string',
      group: 'credential',
      description: 'Official unique identifier (e.g. HGG-001). Auto-generated with next available sequential ID. Displayed on public verification page.',
      initialValue: async (params, context) => {
        try {
          const { getClient } = context;
          if (!getClient) return 'HGG-001';
          const client = getClient({ apiVersion: '2024-08-30' });
          const docs = await client.fetch(
            `*[_type == "employeeVerification" && defined(employeeId)] { employeeId }`
          );
          if (!docs || docs.length === 0) {
            return 'HGG-001';
          }
          const numbers = docs
            .map((d) => {
              const match = (d.employeeId || '').match(/^HGG-(\d+)$/i);
              return match ? parseInt(match[1], 10) : 0;
            })
            .filter((n) => !isNaN(n) && n > 0);

          const maxNum = numbers.length > 0 ? Math.max(...numbers) : docs.length;
          return `HGG-${String(maxNum + 1).padStart(3, '0')}`;
        } catch (err) {
          console.error('Error computing next employeeId:', err);
          return 'HGG-001';
        }
      },
      validation: (Rule) => [
        Rule.required()
          .uppercase()
          .regex(/^[A-Z0-9_-]+$/, {
            name: 'Employee ID format',
            invert: false,
          })
          .error('Employee ID must contain only uppercase letters, numbers, hyphens, or underscores.'),
        Rule.custom(async (employeeId, context) => {
          if (!employeeId) return true;
          try {
            const { getClient, document } = context;
            if (!getClient) return true;
            const client = getClient({ apiVersion: '2024-08-30' });
            const currentDocId = document?._id?.replace(/^drafts\./, '');
            const query = `count(*[_type == "employeeVerification" && !(_id in [$docId, "drafts." + $docId]) && (employeeId == $employeeId || employeeId == upper($employeeId))])`;
            const count = await client.fetch(query, {
              docId: currentDocId || '',
              employeeId: employeeId.trim().toUpperCase(),
            });
            if (count > 0) {
              return `Warning: Employee ID "${employeeId}" is already taken by another registered employee. Please assign a unique ID.`;
            }
          } catch (err) {
            console.warn('Error checking duplicate employeeId:', err);
          }
          return true;
        }).warning(),
      ],
    }),
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      group: 'credential',
      description: 'Legal full name as printed on the official ID card. Displayed on public verification page.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Position / Official Role',
      type: 'string',
      group: 'credential',
      description: 'Official corporate title (e.g. Chairman & Chief Executive Officer). Displayed on public verification page.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'organization',
      title: 'Organization',
      type: 'string',
      group: 'credential',
      initialValue: 'THE HINTER GROUP GHANA LTD',
      description: 'Corporate entity name. Displayed on public verification page.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'department',
      title: 'Department / Division',
      type: 'string',
      group: 'credential',
      description: 'Corporate department or governance council. Displayed on public verification page.',
      initialValue: 'Executive Leadership & Governance',
    }),
    defineField({
      name: 'status',
      title: 'Verification Status',
      type: 'string',
      group: 'credential',
      description: 'Status indicator shown upon scan. Displayed on public verification page.',
      options: {
        list: [
          { title: 'Active / Verified', value: 'active' },
          { title: 'Inactive / Expired', value: 'inactive' },
          { title: 'Suspended / Under Review', value: 'suspended' },
        ],
        layout: 'radio',
      },
      initialValue: 'active',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'issuedDate',
      title: 'Card Issuance Date',
      type: 'date',
      group: 'credential',
      description: 'Date of official issuance or badge printing. Displayed on public verification page.',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    }),
    defineField({
      name: 'portrait',
      title: 'Approved Official Portrait',
      type: 'image',
      group: 'credential',
      description: 'Approved executive portrait image to display on the public verification page.',
      options: {
        hotspot: true,
      },
    }),

    // ══════════════════════════════════════════════════════════════════
    // GROUP: CONFIDENTIAL PERSONAL INFO (CMS ONLY — NEVER DISPLAYED)
    // ══════════════════════════════════════════════════════════════════
    defineField({
      name: 'dateOfBirth',
      title: 'Date of Birth',
      type: 'date',
      group: 'personal',
      description: '🔒 Confidential (CMS Only): For internal HR records. NEVER displayed on public verification page.',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    }),
    defineField({
      name: 'homeAddress',
      title: 'Residential / Home Address',
      type: 'text',
      rows: 2,
      group: 'personal',
      description: '🔒 Confidential (CMS Only): Residential address for internal records. NEVER displayed on public verification page.',
    }),
    defineField({
      name: 'personalPhone',
      title: 'Personal Telephone Number',
      type: 'string',
      group: 'personal',
      description: '🔒 Confidential (CMS Only): Direct telephone contact for internal records. NEVER displayed on public verification page.',
    }),
    defineField({
      name: 'personalEmail',
      title: 'Personal Email Address',
      type: 'string',
      group: 'personal',
      description: '🔒 Confidential (CMS Only): Personal email address for internal records. NEVER displayed on public verification page.',
    }),
    defineField({
      name: 'governmentIdNumber',
      title: 'Government ID / Passport / Ghana Card Number',
      type: 'string',
      group: 'personal',
      description: '🔒 Confidential (CMS Only): National identification, Ghana Card, or passport number for compliance. NEVER displayed on public verification page.',
    }),
    defineField({
      name: 'emergencyContact',
      title: 'Emergency Contact Details',
      type: 'string',
      group: 'personal',
      description: '🔒 Confidential (CMS Only): Emergency contact name and phone number for internal HR records. NEVER displayed on public verification page.',
    }),
    defineField({
      name: 'internalNotes',
      title: 'Internal Administrative Notes',
      type: 'text',
      rows: 3,
      group: 'personal',
      description: '🔒 Confidential (CMS Only): Private internal reference remarks. NEVER displayed on public verification page.',
    }),
  ],
  preview: {
    select: {
      title: 'fullName',
      subtitle: 'employeeId',
      position: 'position',
      status: 'status',
      media: 'portrait',
    },
    prepare(selection) {
      const { title, subtitle, position, status, media } = selection;
      const statusLabel =
        status === 'active'
          ? '✓ Active'
          : status === 'inactive'
          ? '✕ Inactive'
          : '⚠ Suspended';
      return {
        title: `${title} (${subtitle || 'No ID'})`,
        subtitle: `${position || ''} • ${statusLabel}`,
        media,
      };
    },
  },
});
