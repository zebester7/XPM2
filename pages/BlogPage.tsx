
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../db';
import { BlogPost } from '../types';
import { blogPosts } from '../blogData';
import BlogContent from '../components/BlogContent.tsx';
import { formatPostDate } from '../components/RegionalBlogList.tsx';

const REGION_LABELS: Record<string, string> = { uk: 'UK', us: 'USA', ae: 'UAE', pk: 'Pakistan', global: 'Global' };

const articles = [...blogPosts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

const BlogPage: React.FC = () => {
  // Articles written in the admin panel live in the browser's db, so they load after hydration
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    setPosts(db.getBlogs());
  }, []);

  const formatDate = (ts: number) => {
    return new Date(ts).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Full Article Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 backdrop-blur-md p-4 overflow-y-auto">
          <div className="max-w-3xl w-full bg-white rounded-[3rem] shadow-2xl animate-fade-in-up my-10">
            <div className="p-8 md:p-16 relative">
              <button
                onClick={() => setSelectedPost(null)}
                aria-label="Close article"
                className="absolute top-8 right-8 w-10 h-10 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center hover:bg-slate-200 transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              <div className="mb-10">
                <span className="px-3 py-1 bg-xpm-blue/5 text-xpm-blue text-[10px] font-black uppercase tracking-widest rounded-lg mb-4 inline-block">{selectedPost.category}</span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4 tracking-tight">{selectedPost.title}</h2>
                <div className="flex items-center gap-3 text-slate-400 text-xs font-bold uppercase tracking-widest">
                  <span>{selectedPost.author}</span>
                  <span>•</span>
                  <span>{formatDate(selectedPost.date)}</span>
                </div>
              </div>

              <BlogContent content={selectedPost.content} />

              <div className="mt-16 pt-10 border-t border-slate-100 text-center">
                 <button
                  onClick={() => setSelectedPost(null)}
                  className="px-10 py-4 bg-xpm-blue text-white font-black rounded-2xl hover:bg-xpm-dark transition shadow-xl uppercase tracking-widest text-sm"
                 >
                   Back to Articles
                 </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-4">Academic Resources & Blog</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Expert tips, exam strategies, and curriculum updates for international students.</p>
          <nav className="mt-10 flex flex-wrap justify-center gap-3 text-xs font-black uppercase tracking-widest" aria-label="Regional blogs">
            <Link to="/uk/blog" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition">UK GCSE & A Level</Link>
            <Link to="/us/blog" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition">US SAT & AP</Link>
            <Link to="/ae/blog" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition">UAE IB & IGCSE</Link>
          </nav>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 gap-12">
          {articles.map((post) => (
            <article key={post.id} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition group">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-xpm-blue/5 text-xpm-blue text-[10px] font-black uppercase tracking-widest rounded-lg">{post.category}</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">{REGION_LABELS[post.region]}</span>
                <time dateTime={post.publishedAt} className="text-[10px] font-bold text-slate-400 uppercase">{formatPostDate(post.publishedAt)}</time>
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-xpm-blue transition tracking-tight">
                <Link to={`/blog/${post.slug}`}>{post.title.split('|')[0].trim()}</Link>
              </h2>
              <p className="text-slate-500 font-medium leading-relaxed mb-8">{post.excerpt}</p>
              <Link
                to={`/blog/${post.slug}`}
                className="text-xs font-black text-xpm-blue uppercase tracking-widest border-b-2 border-xpm-blue pb-1 hover:text-xpm-dark hover:border-xpm-dark transition"
              >
                Read Full Article
              </Link>
            </article>
          ))}

          {posts.map((post) => (
            <article key={post.id} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition group">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-xpm-blue/5 text-xpm-blue text-[10px] font-black uppercase tracking-widest rounded-lg">{post.category}</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">{formatDate(post.date)}</span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-xpm-blue transition tracking-tight">{post.title}</h2>
              <p className="text-slate-500 font-medium leading-relaxed mb-8">{post.excerpt}</p>
              <button
                onClick={() => setSelectedPost(post)}
                className="text-xs font-black text-xpm-blue uppercase tracking-widest border-b-2 border-xpm-blue pb-1 hover:text-xpm-dark hover:border-xpm-dark transition"
              >
                Read Full Article
              </button>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center bg-white p-12 rounded-[3rem] border border-slate-100">
           <h2 className="text-2xl font-black text-slate-900 mb-4">Subscribe to Exam Alerts</h2>
           <p className="text-slate-500 mb-8 font-medium">Get the latest past papers and study plans delivered to your inbox.</p>
           <form className="flex max-w-md mx-auto gap-4" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
              <input type="email" placeholder="Your email address" aria-label="Email address" required className="flex-grow px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-xpm-blue outline-none font-bold text-sm shadow-inner" />
              <button type="submit" className="px-8 bg-xpm-blue text-white font-black rounded-2xl hover:bg-xpm-dark transition uppercase tracking-widest text-xs">Join</button>
           </form>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
