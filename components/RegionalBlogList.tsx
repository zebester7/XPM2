import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../blogData';

export interface BlogListTheme {
  heroGradient: string;
  badge: string;
  hoverTitle: string;
  link: string;
}

interface RegionalBlogListProps {
  heading: string;
  intro: string;
  posts: BlogPost[];
  theme: BlogListTheme;
  locale: string;
}

export const formatPostDate = (dateStr: string, locale = 'en-GB') =>
  new Date(dateStr).toLocaleDateString(locale, { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC' });

const RegionalBlogList: React.FC<RegionalBlogListProps> = ({ heading, intro, posts, theme, locale }) => (
  <div className="bg-slate-50 min-h-screen">
    <section className={`bg-gradient-to-br from-slate-900 ${theme.heroGradient} py-20 text-white`}>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4">{heading}</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">{intro}</p>
      </div>
    </section>

    <div className="max-w-5xl mx-auto px-4 py-20">
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 gap-10">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition group"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className={`px-3 py-1 ${theme.badge} text-[10px] font-black uppercase tracking-widest rounded-lg`}>{post.category}</span>
                <time dateTime={post.publishedAt} className="text-[10px] font-bold text-slate-400 uppercase">{formatPostDate(post.publishedAt, locale)}</time>
                <span className="text-[10px] font-bold text-slate-400 uppercase">📖 {post.readTime} min read</span>
              </div>
              <h2 className={`text-3xl font-black text-slate-900 mb-4 ${theme.hoverTitle} transition tracking-tight`}>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-6">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {post.keywords.slice(0, 3).map((kw, i) => (
                  <span key={i} className="text-xs bg-slate-50 text-slate-600 px-3 py-1 rounded-lg font-semibold">{kw}</span>
                ))}
              </div>
              <Link
                to={`/blog/${post.slug}`}
                className={`text-sm font-black ${theme.link} uppercase tracking-widest border-b-2 pb-1 transition`}
              >
                Read Full Article →
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl font-black uppercase tracking-widest text-slate-400">No articles found.</p>
        </div>
      )}
    </div>
  </div>
);

export default RegionalBlogList;
