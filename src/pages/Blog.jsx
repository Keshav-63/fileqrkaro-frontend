// src/pages/Blog.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';
import './Blog.css'; // You can reuse styles from About.css or create a simple grid

const Blog = () => {
  return (
    <main className="blog-page" style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
      <motion.section 
        className="blog-hero"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <h1 style={{ fontSize: '3rem', background: 'linear-gradient(to right, #646cff, #bc13fe)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          FileQRkaro Blog
        </h1>
        <p style={{ color: '#888', fontSize: '1.2rem', maxWidth: '600px', margin: '1rem auto' }}>
          Guides, tutorials, and insights on secure file sharing, QR code technology, and maximizing your digital workflow.
        </p>
      </motion.section>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
        {blogPosts.map((post, index) => (
          <motion.article 
            key={post.id}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
            style={{ 
              background: 'var(--color-background-card, #1a1a1a)', 
              borderRadius: '12px', padding: '2rem', border: '1px solid #333',
              display: 'flex', flexDirection: 'column'
            }}
          >
            <div style={{ fontSize: '0.85rem', color: '#888', marginBottom: '1rem' }}>
              {post.date} • {post.readTime}
            </div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', lineHeight: '1.3' }}>
              <Link to={`/blog/${post.slug}`} style={{ color: 'white', textDecoration: 'none' }}>
                {post.title}
              </Link>
            </h2>
            <p style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem', flexGrow: 1 }}>
              {post.excerpt}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #333', paddingTop: '1rem' }}>
              <span style={{ fontWeight: 'bold', color: '#fff' }}>By {post.author}</span>
              <Link to={`/blog/${post.slug}`} style={{ color: '#646cff', textDecoration: 'none', fontWeight: 'bold' }}>
                Read More →
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </main>
  );
};

export default Blog;