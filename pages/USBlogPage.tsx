import React from 'react';
import { blogPosts } from '../blogData';
import RegionalBlogList from '../components/RegionalBlogList';

const posts = blogPosts.filter(post => post.region === 'us' || post.region === 'global');

const USBlogPage: React.FC = () => (
  <RegionalBlogList
    heading="USA SAT & AP Blog"
    intro="Expert exam strategies, college prep tips, and insider advice from top US tutors."
    posts={posts}
    locale="en-US"
    theme={{
      heroGradient: 'to-red-900',
      badge: 'bg-red-50 text-red-600',
      hoverTitle: 'group-hover:text-red-600',
      link: 'text-red-600 border-red-600 hover:text-red-700',
    }}
  />
);

export default USBlogPage;
