import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { blogPosts } from '../blogData';
import { canonicalUrl } from '../seoRoutes.ts';
import BlogContent from '../components/BlogContent.tsx';
import JsonLd from '../components/JsonLd.tsx';
import { formatPostDate } from '../components/RegionalBlogList.tsx';
import NotFoundPage from './NotFoundPage.tsx';

const REGION_HUBS: Record<string, { path: string; label: string }> = {
  uk: { path: '/uk/blog', label: 'More UK GCSE & A Level articles' },
  us: { path: '/us/blog', label: 'More US SAT & AP articles' },
  ae: { path: '/ae/blog', label: 'More UAE IB & IGCSE articles' },
  pk: { path: '/pk', label: 'O & A Level tutoring in Pakistan' },
};

/** Splits "Sarah Johnson, Senior Maths Tutor" into name and role */
const splitAuthor = (author: string) => {
  const [name, ...role] = author.split(',');
  return { name: name.trim(), role: role.join(',').trim() };
};

const BlogPostPage: React.FC = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return <NotFoundPage />;

  const url = canonicalUrl(`/blog/${post.slug}`);
  const author = splitAuthor(post.author);
  const headline = post.title.split('|')[0].trim();
  const related = blogPosts.filter(p => p.region === post.region && p.id !== post.id).slice(0, 3);
  const hub = REGION_HUBS[post.region];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    keywords: post.keywords.join(', '),
    articleSection: post.category,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    image: 'https://www.xpmtutors.com/android-chrome-512x512.png',
    author: {
      '@type': 'Person',
      name: author.name,
      ...(author.role && { jobTitle: author.role }),
      worksFor: { '@id': 'https://www.xpmtutors.com/#organization' },
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.xpmtutors.com/#organization',
      name: 'XPM Tutors',
      logo: { '@type': 'ImageObject', url: 'https://www.xpmtutors.com/android-chrome-512x512.png' },
    },
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <JsonLd data={articleSchema} />
      <article className="max-w-3xl mx-auto px-4 py-16 lg:py-24">
        <header className="mb-10">
          <span className="px-3 py-1 bg-xpm-blue/5 text-xpm-blue text-[10px] font-black uppercase tracking-widest rounded-lg mb-4 inline-block">{post.category}</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6 tracking-tight">{headline}</h1>
          <p className="text-xl text-slate-500 leading-relaxed mb-6">{post.excerpt}</p>
          <div className="flex flex-wrap items-center gap-3 text-slate-400 text-xs font-bold uppercase tracking-widest">
            <span>By {author.name}</span>
            <span aria-hidden="true">•</span>
            <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
            <span aria-hidden="true">•</span>
            <span>{post.readTime} min read</span>
          </div>
        </header>

        <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-sm">
          <BlogContent content={post.content} />
        </div>

        <aside className="mt-10 bg-white p-8 rounded-[2rem] border border-slate-100 flex gap-5 items-start" aria-label="About the author">
          <div className="w-14 h-14 shrink-0 rounded-full bg-xpm-blue text-white flex items-center justify-center text-xl font-black" aria-hidden="true">
            {author.name.replace(/^(Dr\.|Prof\.|Mrs?\.|Ms\.)\s*/, '')[0]}
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">About the author</p>
            <p className="text-lg font-black text-slate-900">{author.name}</p>
            {author.role && <p className="text-sm font-bold text-xpm-blue mb-2">{author.role}, XPM Tutors</p>}
            <p className="text-slate-600 leading-relaxed">
              {author.name} writes study guides for the XPM Tutors blog. XPM Tutors provides one-to-one online tutoring for
              O Level, A Level, IGCSE, SAT and entry tests. <Link to="/teacher-directory" className="text-xpm-blue font-bold hover:underline">Meet our tutors</Link>.
            </p>
          </div>
        </aside>

        <div className="mt-10 bg-xpm-blue text-white p-8 md:p-10 rounded-[2rem] text-center">
          <p className="text-2xl font-black mb-3">Want one-to-one help with {post.category}?</p>
          <p className="text-white/80 mb-6">Book a free trial session with an XPM tutor.</p>
          <Link to="/hire-teacher" className="inline-block px-8 py-4 bg-xpm-orange text-white font-black rounded-xl hover:bg-orange-600 transition uppercase tracking-widest text-sm">
            Book a Free Trial
          </Link>
        </div>

        {related.length > 0 && (
          <nav className="mt-14" aria-label="Related articles">
            <h2 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">Related articles</h2>
            <ul className="space-y-4">
              {related.map(r => (
                <li key={r.id}>
                  <Link to={`/blog/${r.slug}`} className="block bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition">
                    <span className="block text-lg font-black text-slate-900">{r.title.split('|')[0].trim()}</span>
                    <span className="block text-sm text-slate-500 mt-1">{r.excerpt}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-6 text-sm font-black uppercase tracking-widest">
              {hub && <Link to={hub.path} className="text-xpm-blue hover:underline">{hub.label} →</Link>}
              <Link to="/blog" className="text-xpm-blue hover:underline">All articles →</Link>
            </div>
          </nav>
        )}
      </article>
    </div>
  );
};

export default BlogPostPage;
