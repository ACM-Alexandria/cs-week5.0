import React from 'react';
import { FaFacebook, FaLinkedin, FaTelegram } from 'react-icons/fa';
import './Footer.css'; // Import the custom CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Alexandria ACM student chapter</p>
      <div className="follow-us">
        <p>Follow us on:</p>
        <div className="social-icons">
          <FaFacebook />
          <FaLinkedin />
          <FaTelegram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
