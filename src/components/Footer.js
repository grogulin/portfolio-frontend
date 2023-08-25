import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <footer className="text-center shadow bg-white">
      <h3 className='text-center'>Thanks for your visit!</h3>
      <div className="mt-3">
        <a href="https://www.linkedin.com/in/yaroslav-grogul-22364a166/" target="_blank" rel="noopener noreferrer" className="btn btn-primary contact-button btn-linkedin">
          <FontAwesomeIcon icon={faLinkedin} className="btn-icon" />
           LinkedIn
        </a>
        <a href="mailto:time7bass@gmail.com" className="btn btn-primary contact-button btn-linkedin">
          <FontAwesomeIcon icon={faEnvelope} className="btn-icon" />
           Email
        </a>
        <a href="https://github.com/grogulin?tab=repositories" className="btn btn-primary contact-button btn-linkedin">
          <FontAwesomeIcon icon={faGithub} className="btn-icon" />
           GitHub
        </a>
        
      </div>
    </footer>
  );
};

export default Footer;
