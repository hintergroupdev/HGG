import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, useCdn } from '../env';

export const client = createClient({
  projectId: projectId || 'demo-project-id',
  dataset: dataset || 'production',
  apiVersion,
  useCdn,
  perspective: 'published',
});

// Helper for fetching data safely
export async function sanityFetch({ query, params = {}, tags = [] }) {
  if (!projectId) {
    // Graceful fallback if Sanity is not connected yet
    return null;
  }
  try {
    return await client.fetch(query, params, {
      next: {
        revalidate: process.env.NODE_ENV === 'development' ? 30 : 3600,
        tags,
      },
    });
  } catch (error) {
    console.warn('[Sanity Fetch Warning]', error?.message || error);
    return null;
  }
}
