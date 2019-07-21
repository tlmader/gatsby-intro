import { Link } from 'gatsby';
import React from 'react';
import Hero from '../components/hero';
import Insta from '../components/insta';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview';
import usePosts from '../hooks/use-posts';

export default () => {
  const posts = usePosts();

  return (
    <>
      <Hero />
      <Layout>
        <h1>Welcome</h1>
        <p>This is my first website built with Gatsby.</p>
        <Link to="/about/">Learn about me &rarr;</Link>
        <h2>Read my blog</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
        <Insta />
      </Layout>
    </>
  );
};
