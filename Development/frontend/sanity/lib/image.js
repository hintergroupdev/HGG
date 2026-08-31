import { createImageUrlBuilder } from '@sanity/image-url';
import { dataset, projectId } from '../env';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '0rqjd271',
  dataset: dataset || 'production',
});

export const urlForImage = (source) => {
  if (!source) return null;
  if (typeof source === 'string') return source;
  if (!source.asset && !source._ref && typeof source !== 'object') return null;
  try {
    return imageBuilder?.image(source).auto('format').fit('max');
  } catch (err) {
    console.warn('[Image Builder Error]', err);
    return null;
  }
};
