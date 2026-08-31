'use client';

import { StyleSheetManager } from 'styled-components';
import { NextStudio } from 'next-sanity/studio';
import config from '../../../sanity.config';

// Filter internal Sanity/UI props so styled-components doesn't forward them to the DOM
const ignoredProps = new Set([
  'intent',
  'params',
  'space',
  'tone',
  'radius',
  'muted',
  'accent',
  'fontSize',
  'weight',
  'column',
  'columns',
  'rows',
]);

function shouldForwardProp(propName, target) {
  if (typeof target === 'string' && ignoredProps.has(propName)) {
    return false;
  }
  return true;
}

export default function StudioPage() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <NextStudio config={config} />
      </StyleSheetManager>
    </div>
  );
}

