// src/pages/BlogPost.jsx
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div style={{ textAlign: 'center', padding: '10rem 2rem' }}>
        <h2>Article not found</h2>
        <Link to="/blog" style={{ color: '#646cff' }}>Return to Blog</Link>
      </div>
    );
  }

  return (
    <motion.main 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
      style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 1.5rem', lineHeight: '1.8' }}
    >
      <Link to="/blog" style={{ color: '#646cff', textDecoration: 'none', display: 'inline-block', marginBottom: '2rem' }}>
        ← Back to all articles
      </Link>
      
      <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white', lineHeight: '1.2' }}>{post.title}</h1>
        <div style={{ color: '#888', display: 'flex', justifyContent: 'center', gap: '1rem', fontSize: '0.9rem' }}>
          <span>Written by <strong>{post.author}</strong></span>
          <span>•</span>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
      </header>

      {/* This renders the JSX content from your data file */}
      <div className="blog-content" style={{ color: '#ddd', fontSize: '1.1rem' }}>
        {post.content}
      </div>
    </motion.main>
  );
};

export default BlogPost;