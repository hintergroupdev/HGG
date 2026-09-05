import { defineField, defineType } from 'sanity';

export const employeeVerification = defineType({
  name: 'employeeVerification',
  title: 'Employee ID & Verification',
  type: 'document',
  fields: [
    defineField({
      name: 'employeeId',
      title: 'Employee ID',
      type: 'string',
      description: 'Official unique identifier (e.g. HGG-001). Auto-generated with next available sequential ID.',
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
      description: 'Legal full name as printed on the official ID card.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Position / Official Role',
      type: 'string',
      description: 'Official corporate title (e.g. Chairman & Chief Executive Officer).',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'organization',
      title: 'Organization',
      type: 'string',
      initialValue: 'THE HINTER GROUP GHANA LTD',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'department',
      title: 'Department / Division',
      type: 'string',
      description: 'Corporate department or governance council.',
      initialValue: 'Executive Leadership & Governance',
    }),
    defineField({
      name: 'status',
      title: 'Verification Status',
      type: 'string',
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
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    }),
    defineField({
      name: 'portrait',
      title: 'Approved Official Portrait',
      type: 'image',
      description: 'Optional executive portrait image to display on the verification page.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'internalNotes',
      title: 'Internal Administrative Notes',
      type: 'text',
      rows: 2,
      description: 'Internal reference notes (never displayed on the public verification page).',
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
