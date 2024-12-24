import React from 'react';
import { FaFacebook, FaLinkedin, FaTelegram } from 'react-icons/fa';
import './Footer.css'; // Import the custom CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="follow-us">
        <p>Follow us on:</p>
        <div className="social-icons">
          <FaFacebook />
          <FaLinkedin />
          <FaTelegram />
        </div>
      </div>
      <p>© 2025 Alexandria ACM student chapter</p>
    </footer>
  );
};

export default Footer;
