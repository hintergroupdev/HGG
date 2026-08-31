import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId: projectId || '0rqjd271',
  dataset: dataset || 'production',
  apiVersion,
  useCdn: false, // Ensure direct live queries for real-time updates
  perspective: 'published',
});

// Helper for fetching data safely
export async function sanityFetch({ query, params = {}, tags = [] }) {
  const activeProjectId = projectId || '0rqjd271';
  if (!activeProjectId) {
    return null;
  }
  try {
    return await client.fetch(query, params, {
      cache: 'no-store',
      next: {
        revalidate: 0, // Real-time immediate updates
        tags,
      },
    });
  } catch (error) {
    console.warn('[Sanity Fetch Warning]', error?.message || error);
    return null;
  }
}
