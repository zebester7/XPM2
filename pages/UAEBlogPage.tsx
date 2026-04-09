import React, { useState, useEffect } from 'react';
import { updatePageMeta } from '../seoHelper';
import { addHrefLangTags, generateHreflangs, generateBreadcrumbSchema, addStructuredData } from '../internationalSEOHelper';
import { blogPosts, BlogPost } from '../blogData';

const UAEBlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    // Update SEO metadata
    updatePageMeta({
      title: 'IB & IGCSE Blog | Dubai & UAE Exam Tips | XPM Tutors',
      description: 'Expert blog on IB, IGCSE, and International Baccalaureate exams for UAE schools. Read insider tips from top Dubai tutors.',
      keywords: 'IB blog, IGCSE blog, Dubai tutoring, UAE exam tips, International Baccalaureate, IGCSE strategies',
      canonical: 'https://xpmtutors.com/ae/blog/'
    });

    // Add hreflang tags
    const hreflangs = generateHreflangs('/ae/blog/', true);
    addHrefLangTags(hreflangs);

    // Add breadcrumb schema
    const breadcrumb = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://xpmtutors.com' },
      { name: 'UAE', url: 'https://xpmtutors.com/ae/' },
      { name: 'Blog', url: 'https://xpmtutors.com/ae/blog/' }
    ]);
    addStructuredData(breadcrumb, 'ae-breadcrumb-schema');

    // Filter UAE blogs
    const aeBlogs = blogPosts.filter(post => post.region === 'ae' || post.region === 'global');
    setPosts(aeBlogs);

    window.scrollTo(0, 0);
  }, []);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-AE', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Modal for full article */}
      {selectedPost && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 backdrop-blur-md p-4 overflow-y-auto">
          <div className="max-w-3xl w-full bg-white rounded-[3rem] shadow-2xl my-10">
            <div className="p-8 md:p-16 relative">
              <button 
                onClick={() => setSelectedPost(null)}
                className="absolute top-8 right-8 w-10 h-10 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center hover:bg-slate-200 transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              
              <div className="mb-10">
                <span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-widest rounded-lg mb-4 inline-block">{selectedPost.category}</span>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4 tracking-tight">{selectedPost.title}</h1>
                <div className="flex items-center gap-3 text-slate-400 text-xs font-bold uppercase tracking-widest">
                  <span>{selectedPost.author}</span>
                  <span>•</span>
                  <span>{formatDate(selectedPost.publishedAt)}</span>
                </div>
              </div>

              <div className="prose max-w-none">
                {selectedPost.content.split('\n').map((line, i) => {
                  if (line.startsWith('# ')) return <h2 key={i} className="text-3xl font-black mb-6 mt-10 text-slate-900">{line.replace('# ', '')}</h2>;
                  if (line.startsWith('## ')) return <h3 key={i} className="text-2xl font-black mb-4 mt-8 text-slate-900">{line.replace('## ', '')}</h3>;
                  if (line.startsWith('- ')) return <li key={i} className="ml-6 mb-2 text-slate-600 font-medium list-disc">{line.replace('- ', '')}</li>;
                  if (line.startsWith('**') && line.endsWith('**')) return <strong key={i} className="block font-black text-slate-900 mb-2 text-lg">{line.replace(/\*\*/g, '')}</strong>;
                  if (line.trim() === '') return <div key={i} className="h-4"></div>;
                  return <p key={i} className="mb-4 text-slate-600 leading-relaxed text-base">{line}</p>;
                })}
              </div>

              <div className="mt-16 pt-10 border-t border-slate-100 text-center">
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="px-10 py-4 bg-green-600 text-white font-black rounded-2xl hover:bg-green-700 transition shadow-xl uppercase tracking-widest text-sm"
                >
                  Back to Articles
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 to-green-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4">UAE IB & IGCSE Blog</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Expert exam strategies, study tips, and insider advice from top Dubai tutors.</p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <div className="max-w-5xl mx-auto px-4 py-20">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 gap-10">
            {posts.map((post) => (
              <article 
                key={post.id} 
                className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition group cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-widest rounded-lg">{post.category}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">{formatDate(selectedPost?.publishedAt || '')}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">📖 {post.readTime} min read</span>
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-4 group-hover:text-green-600 transition tracking-tight">{post.title}</h2>
                <p className="text-slate-600 font-medium leading-relaxed mb-6">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.keywords.slice(0, 3).map((kw, i) => (
                    <span key={i} className="text-xs bg-slate-50 text-slate-600 px-3 py-1 rounded-lg font-semibold">{kw}</span>
                  ))}
                </div>
                <button 
                  className="text-sm font-black text-green-600 uppercase tracking-widest border-b-2 border-green-600 pb-1 hover:text-green-700 transition"
                >
                  Read Full Article →
                </button>
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
};

export default UAEBlogPage;
