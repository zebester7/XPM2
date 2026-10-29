import React from 'react';
import { prerenderToNodeStream } from 'react-dom/static';
import { StaticRouter } from 'react-router-dom';
import App from './App.tsx';

export { SEO_ROUTES, renderHeadTags, getRouteSeo } from './seoRoutes.ts';

/**
 * Renders the app at `url` to HTML, waiting for every lazy page to resolve.
 * progressiveChunkSize is raised so React never "outlines" a large Suspense boundary
 * (content in a hidden <div> behind the loading fallback, revealed by inline JS);
 * a static page should carry its content inline.
 */
export async function render(url: string): Promise<string> {
  const { prelude } = await prerenderToNodeStream(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>,
    { progressiveChunkSize: Number.MAX_SAFE_INTEGER }
  );
  let html = '';
  for await (const chunk of prelude) html += chunk;
  if (html.includes('<!--$?-->')) throw new Error(`${url}: a Suspense boundary was outlined instead of rendered inline`);
  return html;
}
