// Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center p-3 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="text-white">Developed with ❤️ by iamnotpiyush</p>
            <div className="social-icons">
              <a href="https://www.facebook.com" className="text-white m-2" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://www.twitter.com" className="text-white m-2" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://www.instagram.com" className="text-white m-2" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
