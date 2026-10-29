import React from 'react';
import { blogPosts } from '../blogData';
import RegionalBlogList from '../components/RegionalBlogList';

const posts = blogPosts.filter(post => post.region === 'uk' || post.region === 'global');

const UKBlogPage: React.FC = () => (
  <RegionalBlogList
    heading="UK GCSE & A Level Blog"
    intro="Expert exam strategies, study tips, and insider advice from top UK tutors."
    posts={posts}
    locale="en-GB"
    theme={{
      heroGradient: 'to-blue-900',
      badge: 'bg-blue-50 text-blue-600',
      hoverTitle: 'group-hover:text-blue-600',
      link: 'text-blue-600 border-blue-600 hover:text-blue-700',
    }}
  />
);

export default UKBlogPage;
