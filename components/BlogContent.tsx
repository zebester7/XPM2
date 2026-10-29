import React from 'react';

/** Renders **bold** spans inside a line of blog text */
const renderInline = (text: string): React.ReactNode[] =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={i} className="font-black text-slate-900">{part.slice(2, -2)}</strong>
      : part
  );

type Block =
  | { kind: 'heading'; text: string }
  | { kind: 'ul' | 'ol'; items: string[] }
  | { kind: 'p'; text: string };

/** Parses the lightweight markdown used in blogData.ts into blocks */
const parse = (content: string): Block[] => {
  const blocks: Block[] = [];
  for (const raw of content.replace(/\r/g, '').split('\n')) {
    const line = raw.trim();
    if (!line) continue;
    const heading = line.match(/^#{1,3} (.+)$/) || line.match(/^\*\*([^*]+)\*\*$/);
    const bullet = line.match(/^- (.+)$/);
    const numbered = line.match(/^\d+\. (.+)$/);
    const last = blocks[blocks.length - 1];
    if (heading) blocks.push({ kind: 'heading', text: heading[1].replace(/:$/, '') });
    else if (bullet) last?.kind === 'ul' ? last.items.push(bullet[1]) : blocks.push({ kind: 'ul', items: [bullet[1]] });
    else if (numbered) last?.kind === 'ol' ? last.items.push(numbered[1]) : blocks.push({ kind: 'ol', items: [numbered[1]] });
    else blocks.push({ kind: 'p', text: line });
  }
  return blocks;
};

const BlogContent: React.FC<{ content: string }> = ({ content }) => (
  <div>
    {parse(content).map((block, i) => {
      switch (block.kind) {
        case 'heading':
          return <h2 key={i} className="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">{block.text}</h2>;
        case 'ul':
          return (
            <ul key={i} className="list-disc pl-6 mb-6 space-y-2 text-slate-600 text-lg leading-relaxed">
              {block.items.map((item, j) => <li key={j}>{renderInline(item)}</li>)}
            </ul>
          );
        case 'ol':
          return (
            <ol key={i} className="list-decimal pl-6 mb-6 space-y-3 text-slate-600 text-lg leading-relaxed">
              {block.items.map((item, j) => <li key={j}>{renderInline(item)}</li>)}
            </ol>
          );
        default:
          return <p key={i} className="mb-5 text-slate-600 text-lg leading-relaxed">{renderInline(block.text)}</p>;
      }
    })}
  </div>
);

export default BlogContent;
