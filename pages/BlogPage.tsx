
import React, { useState, useEffect } from 'react';
import { db } from '../db';
import { BlogPost } from '../types';

const BlogPage: React.FC = () => {
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

              <div className="prose prose-slate max-w-none prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-p:text-lg">
                {/* Simple markdown simulation for visual flair */}
                {selectedPost.content.split('\n').map((line, i) => {
                  if (line.startsWith('# ')) return <h1 key={i} className="text-3xl font-black mb-6 mt-10">{line.replace('# ', '')}</h1>;
                  if (line.startsWith('## ')) return <h2 key={i} className="text-2xl font-black mb-4 mt-8">{line.replace('## ', '')}</h2>;
                  if (line.startsWith('- ')) return <li key={i} className="ml-6 mb-2 text-slate-600 font-medium">{line.replace('- ', '')}</li>;
                  if (line.trim() === '') return <div key={i} className="h-4"></div>;
                  return <p key={i} className="mb-4 text-slate-600 leading-relaxed font-medium">{line}</p>;
                })}
              </div>

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
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 gap-12">
          {posts.length > 0 ? posts.map((post) => (
            <article key={post.id} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition group">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-xpm-blue/5 text-xpm-blue text-[10px] font-black uppercase tracking-widest rounded-lg">{post.category}</span>
                <span className="text-[10px] font-bold text-slate-300 uppercase">{formatDate(post.date)}</span>
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
          )) : (
            <div className="text-center py-20 opacity-40">
               <p className="text-xl font-black uppercase tracking-widest">No articles found.</p>
            </div>
          )}
        </div>
        
        <div className="mt-20 text-center bg-white p-12 rounded-[3rem] border border-slate-100">
           <h3 className="text-2xl font-black text-slate-900 mb-4">Subscribe to Exam Alerts</h3>
           <p className="text-slate-500 mb-8 font-medium">Get the latest past papers and study plans delivered to your inbox.</p>
           <form className="flex max-w-md mx-auto gap-4" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
              <input type="email" placeholder="Your email address" required className="flex-grow px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-xpm-blue outline-none font-bold text-sm shadow-inner" />
              <button type="submit" className="px-8 bg-xpm-blue text-white font-black rounded-2xl hover:bg-xpm-dark transition uppercase tracking-widest text-xs">Join</button>
           </form>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
