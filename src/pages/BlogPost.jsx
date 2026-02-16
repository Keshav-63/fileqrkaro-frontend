import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';
import './BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <main className="blogpost-page">
        <div className="blogpost-container" style={{ textAlign: 'center', paddingTop: '10rem' }}>
          <h2 style={{ color: 'var(--text)', marginBottom: '1rem' }}>Article not found</h2>
          <Link to="/blog" className="blogpost-back-link">← Return to Blog</Link>
        </div>
      </main>
    );
  }

  return (
    <motion.main 
      className="blogpost-page"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <div className="blogpost-container">
        <Link to="/blog" className="blogpost-back-link">
          ← Back to all articles
        </Link>
        
        <motion.header 
          className="blogpost-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="blogpost-title">{post.title}</h1>
          <div className="blogpost-meta">
            <span>Written by <strong>{post.author}</strong></span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </motion.header>

        <motion.div 
          className="blog-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {post.content}
        </motion.div>
      </div>
    </motion.main>
  );
};

export default BlogPost;