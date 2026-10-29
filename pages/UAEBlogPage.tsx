import React from 'react';
import { blogPosts } from '../blogData';
import RegionalBlogList from '../components/RegionalBlogList';

const posts = blogPosts.filter(post => post.region === 'ae' || post.region === 'global');

const UAEBlogPage: React.FC = () => (
  <RegionalBlogList
    heading="UAE IB & IGCSE Blog"
    intro="Expert exam strategies, study tips, and insider advice from top Dubai tutors."
    posts={posts}
    locale="en-AE"
    theme={{
      heroGradient: 'to-green-900',
      badge: 'bg-green-50 text-green-600',
      hoverTitle: 'group-hover:text-green-600',
      link: 'text-green-600 border-green-600 hover:text-green-700',
    }}
  />
);

export default UAEBlogPage;
