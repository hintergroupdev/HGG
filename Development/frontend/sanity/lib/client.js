import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId: projectId || '0rqjd271',
  dataset: dataset || 'production',
  apiVersion,
  useCdn: false, // Ensure live real-time queries for immediate updates on edit
  perspective: 'published',
});

// Helper for fetching data safely
export async function sanityFetch({ query, params = {}, tags = [], revalidate = 60 }) {
  const activeProjectId = projectId || '0rqjd271';
  if (!activeProjectId) {
    return null;
  }
  try {
    const isServer = typeof window === 'undefined';
    const fetchOptions = isServer
      ? {
          next: {
            revalidate, // Fast ISR caching with automatic background revalidation on server
            tags,
          },
        }
      : {};

    return await client.fetch(query, params, fetchOptions);
  } catch (error) {
    // In browser, fail gracefully to fallback data without console noise
    if (typeof window === 'undefined') {
      console.warn('[Sanity Fetch Warning]', error?.message || error);
    }
    return null;
  }
}
