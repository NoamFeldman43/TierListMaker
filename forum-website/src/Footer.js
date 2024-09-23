// src/Footer.js
import React from 'react';
import './Footer.css'; // We will create this CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Tiers | All rights reserved</p>
        <ul className="footer-links">
          <li><a href="/terms">Terms</a></li>
          <li><a href="/privacy">Privacy</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
