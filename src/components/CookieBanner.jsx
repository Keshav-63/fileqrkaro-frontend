import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) setIsVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          style={{
            position: 'fixed', bottom: 0, left: 0, right: 0,
            padding: '1rem', background: '#1a1a1a', borderTop: '1px solid #333',
            display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem',
            zIndex: 1000, boxShadow: '0 -4px 20px rgba(0,0,0,0.3)'
          }}
        >
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#ccc' }}>
            We use cookies to improve your experience and serve personalized ads.
          </p>
          <button 
            onClick={acceptCookies}
            style={{
              padding: '0.5rem 1.5rem', borderRadius: '4px', border: 'none',
              background: 'linear-gradient(to right, #646cff, #bc13fe)',
              color: 'white', cursor: 'pointer', fontWeight: 'bold'
            }}
          >
            Accept
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;