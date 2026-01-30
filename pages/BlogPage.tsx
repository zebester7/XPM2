
import React, { useState, useEffect } from 'react';
import { db } from '../db';
import { BlogPost } from '../types';

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    setPosts(db.getBlogs());
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
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
                <span className="text-[10px] font-bold text-slate-300 uppercase">{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-xpm-blue transition tracking-tight">{post.title}</h2>
              <p className="text-slate-500 font-medium leading-relaxed mb-8">{post.excerpt}</p>
              <button className="text-xs font-black text-xpm-blue uppercase tracking-widest border-b-2 border-xpm-blue pb-1 hover:text-xpm-dark hover:border-xpm-dark transition">Read Full Article</button>
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
           <form className="flex max-w-md mx-auto gap-4">
              <input type="email" placeholder="Your email address" className="flex-grow px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-xpm-blue outline-none font-bold text-sm" />
              <button className="px-8 bg-xpm-blue text-white font-black rounded-2xl hover:bg-xpm-dark transition uppercase tracking-widest text-xs">Join</button>
           </form>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
