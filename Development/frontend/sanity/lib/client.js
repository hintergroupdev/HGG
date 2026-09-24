import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, useCdn } from '../env';

export const client = createClient({
  projectId: projectId || '0rqjd271',
  dataset: dataset || 'production',
  apiVersion,
  useCdn: useCdn ?? false, // Ensure live real-time Sanity data without Edge CDN caching latency
  perspective: 'published',
});

// Helper for fetching data safely
export async function sanityFetch({ query, params = {}, tags = [], revalidate = 0 }) {
  const activeProjectId = projectId || '0rqjd271';
  if (!activeProjectId) {
    return null;
  }
  try {
    const isServer = typeof window === 'undefined';
    const fetchOptions = isServer
      ? {
          next: {
            revalidate, // Dynamic revalidation
            tags,
          },
          cache: revalidate === 0 ? 'no-store' : undefined,
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
