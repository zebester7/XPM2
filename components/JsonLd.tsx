import React from 'react';

/** Renders a JSON-LD block inline so it is present in the prerendered HTML */
const JsonLd: React.FC<{ data: Record<string, unknown> }> = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
  />
);

export default JsonLd;
