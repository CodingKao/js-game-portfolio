import React from 'react';
import './header.css'
import { FaLinkedin, FaGithub  } from 'react-icons/fa';

const HeaderSocials = () => {
    return (
        <header className="header">
            <h1 className="header-title">Follow Me</h1>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/kao-saelor/?trk=eml-email_notification_digest_01-header-0-profile_glimmer" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="icon linkedin" />
                </a>
                <a href="https://github.com/CodingKao" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon github" />
                </a>
            </div>
        </header>
    );
};

export default HeaderSocials;