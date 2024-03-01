import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import '../css/App.css'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <a href="/terms-of-use">Terms of use</a>
      <a href="/privacy">Privacy & Terms</a>
      <span className="copy-right">© {currentYear} Ezrest, Inc.</span>
      <a href="/about-us">About us</a>
      <a href="/contact">Contact us</a>
    
      <div className="footer-social-media">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
    </footer>
  );
};

export default Footer;
