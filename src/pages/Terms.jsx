import { motion } from 'framer-motion';
import './Terms.css';

const Terms = () => {
  return (
    <motion.main 
      className="terms-page"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <motion.section
        className="terms-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="terms-title"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Terms & <span className="gradient-text">Conditions</span>
        </motion.h1>
      </motion.section>

      <motion.section
        className="terms-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>By using FileQRkaro, you agree to these terms. If you do not agree, please do not use our service.</p>
        </section>

        <section>
          <h2>2. Prohibited Content</h2>
          <p>You may strictly NOT upload: Copyrighted content (piracy), malware/viruses, or illegal material. We reserve the right to delete such files immediately.</p>
        </section>

        <section>
          <h2>3. Service Disclaimer</h2>
          <p>We provide this service "as is." We are not responsible for any data loss. Files are deleted after 24 hours; please keep your own backups.</p>
        </section>
      </motion.section>
    </motion.main>
  );
};

export default Terms;