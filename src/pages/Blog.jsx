import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';
import './Blog.css';

const Blog = () => {
  return (
    <main className="blog-page">
      <motion.section 
        className="blog-hero"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="blog-title"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          FileQRkaro <span className="gradient-text">Blog</span>
        </motion.h1>
        <motion.p
          className="blog-subtitle"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Guides, tutorials, and insights on secure file sharing, QR code technology, and maximizing your digital workflow.
        </motion.p>
      </motion.section>

      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <motion.article 
            key={post.id}
            className="blog-card"
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="blog-card-meta">
              {post.date} • {post.readTime}
            </div>
            <h2 className="blog-card-title">
              <Link to={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            <p className="blog-card-excerpt">
              {post.excerpt}
            </p>
            <div className="blog-card-footer">
              <span className="blog-card-author">By {post.author}</span>
              <Link to={`/blog/${post.slug}`} className="blog-card-read-more">
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