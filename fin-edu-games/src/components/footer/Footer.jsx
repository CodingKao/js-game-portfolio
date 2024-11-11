import React from 'react';
import './footer.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">© 2024 SmartFinance Playground. All rights reserved.</p>
        <div className="social-media">
          <a 
            href="https://www.linkedin.com/in/kao-saelor/?trk=eml-email_notification_digest_01-header-0-profile_glimmer" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon linkedin" />
          </a>
          <a 
            href="https://github.com/CodingKao" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaGithub className="icon github" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
