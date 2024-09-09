import React from 'react';
import './index.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/basket">Basket</a>
          <a href="/wishlist">Wishlist</a>
        </div>

        <div className="social-icons">
          <a href="https://github.com/fuadcode" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://github.com/fuadcode" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://github.com/fuadcode" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/fuad-isk%C9%99nd%C9%99rov" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>

        <div className="footer-copy">
          <p>&copy; 2024 YourCompany. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
