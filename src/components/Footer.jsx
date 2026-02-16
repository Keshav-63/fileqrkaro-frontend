import { Link } from 'react-router-dom';
import './Navbar.css'; // Reusing navbar styles for consistency, or create Footer.css

const Footer = () => {
  return (
    <footer style={{
      padding: '2rem 1rem',
      backgroundColor: 'var(--background-color)', // Assuming you have these variables
      borderTop: '1px solid rgba(255,255,255,0.1)',
      marginTop: 'auto'
    }}>
      <div className="navbar-container" style={{ flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/about" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem' }}>About Us</Link>
          <Link to="/contact" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem' }}>Contact</Link>
          <Link to="/privacy-policy" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem' }}>Privacy Policy</Link>
          <Link to="/terms" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem' }}>Terms & Conditions</Link>
        </div>
        <p style={{ color: '#666', fontSize: '0.8rem', margin: 0 }}>
          © {new Date().getFullYear()} FileQRkaro. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;