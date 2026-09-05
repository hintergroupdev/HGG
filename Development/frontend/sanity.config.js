import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemaTypes';
import { projectId, dataset } from './sanity/env';
import { seedTool } from './sanity/tools/seedTool';
import { employeeQrTool } from './sanity/tools/employeeQrTool';

export default defineConfig({
  basePath: '/studio',
  name: 'default',
  title: 'THE HINTER GROUP GHANA LTD — Content Studio',

  projectId: projectId || '0rqjd271',
  dataset: dataset || 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('HGG Content Management')
          .items([
            // Singleton: Site Settings
            S.listItem()
              .title('Global Site Settings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.divider(),
            // Leadership & Governance
            S.documentTypeListItem('leadershipMember').title('Leadership & Governance'),
            // Employee ID & Verification
            S.documentTypeListItem('employeeVerification').title('Employee ID & Verification'),
            S.divider(),
            // Service Offerings
            S.documentTypeListItem('service').title('Core Service Pillars'),
            // Focus Industries
            S.documentTypeListItem('industry').title('9 Priority Sectors'),
            // Projects & Partnerships
            S.documentTypeListItem('project').title('Projects & Strategic Initiatives'),
            S.divider(),
            // Insights & News
            S.documentTypeListItem('post').title('Insights & News Articles'),
            S.documentTypeListItem('category').title('Publication Streams'),
            S.divider(),
            // Legal Pages (Privacy & Terms)
            S.documentTypeListItem('legalPage').title('Legal Pages (Privacy & Terms)'),
          ]),
    }),
  ],

  tools: (prev) => [...prev, employeeQrTool(), seedTool()],

  document: {
    comments: {
      enabled: false,
    },
  },

  schema: {
    types: schemaTypes,
  },
});

