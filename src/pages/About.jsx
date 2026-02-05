import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <main className="about-page">
      <motion.section
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="about-title"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          About <span className="gradient-text">FileQRkaro</span>
        </motion.h1>
        <motion.p
          className="about-subtitle"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Making file sharing simple, secure, and accessible to everyone
        </motion.p>
      </motion.section>

      <motion.section
        className="mission-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="mission-content">
          <motion.div
            className="mission-text"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2>Our Mission</h2>
            <p>
              FileQRkaro was created with a simple goal: to make file sharing as easy as scanning a QR code. 
              We believe that sharing files shouldn't require complicated sign-ups, expensive subscriptions, 
              or compromising your privacy.
            </p>
            <p>
              Our platform empowers users to share files instantly across devices without any barriers. 
              Whether you're a student sharing notes, a professional exchanging documents, or anyone who 
              needs quick file transfer, FileQRkaro is here for you.
            </p>
          </motion.div>
          <motion.div
            className="mission-visual"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="visual-card">
              <div className="visual-icon">🚀</div>
              <h3>Fast & Simple</h3>
              <p>Upload and share in seconds</p>
            </div>
            <div className="visual-card">
              <div className="visual-icon">🔒</div>
              <h3>Secure</h3>
              <p>Auto-delete after 24 hours</p>
            </div>
            <div className="visual-card">
              <div className="visual-icon">🆓</div>
              <h3>Free Forever</h3>
              <p>No hidden costs or limits</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="values-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <motion.div
            className="value-card"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className="value-number">01</div>
            <h3>Privacy First</h3>
            <p>We never store your personal data. Files are automatically deleted after 24 hours, ensuring your privacy is always protected.</p>
          </motion.div>

          <motion.div
            className="value-card"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="value-number">02</div>
            <h3>Simplicity</h3>
            <p>No accounts, no complications. Just upload, get your QR code, and share. That's how file sharing should be.</p>
          </motion.div>

          <motion.div
            className="value-card"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="value-number">03</div>
            <h3>Accessibility</h3>
            <p>Free for everyone, everywhere. We believe essential tools should be accessible to all without barriers.</p>
          </motion.div>

          <motion.div
            className="value-card"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="value-number">04</div>
            <h3>Innovation</h3>
            <p>We continuously improve our platform with modern technologies to provide the best user experience.</p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="team-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Meet the Team</h2>
        <p className="team-description">
          Built with passion by developers who believe in making the web more accessible
        </p>
        <div className="team-grid">
          <motion.div
            className="team-card"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ y: -10 }}
          >
            <div className="team-avatar">
              <div className="avatar-placeholder">K</div>
            </div>
            <h3>Keshav</h3>
            <p className="team-role">Co-Founder & Developer</p>
            <p className="team-bio">
              Passionate about creating user-friendly applications that solve real-world problems.
            </p>
          </motion.div>

          <motion.div
            className="team-card"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ y: -10 }}
          >
            <div className="team-avatar">
              <div className="avatar-placeholder">S</div>
            </div>
            <h3>Shreeyansh</h3>
            <p className="team-role">Co-Founder & Developer</p>
            <p className="team-bio">
              Dedicated to building secure and efficient solutions for seamless file sharing.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="stats-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="stats-grid">
          <motion.div
            className="stat-card"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className="stat-number">10MB</div>
            <div className="stat-label">Max File Size</div>
          </motion.div>

          <motion.div
            className="stat-card"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="stat-number">24hrs</div>
            <div className="stat-label">Secure Storage</div>
          </motion.div>

          <motion.div
            className="stat-card"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="stat-number">100%</div>
            <div className="stat-label">Free Forever</div>
          </motion.div>

          <motion.div
            className="stat-card"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="stat-number">0</div>
            <div className="stat-label">Sign-Ups Required</div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
};

export default About;
