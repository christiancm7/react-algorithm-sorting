import React from 'react';
import './style.css';

const Footer = (props) => {
  return (
    <footer className="Footer">
      <section>
        Designed and built with{' '}
        <span className="Footer__Heart">&hearts;</span> by{' '}
        <a
          href="https://www.linkedin.com/in/christiancm7"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Christian Morales
        </a>
      </section>

      <section className="Footer__Items">
    
      </section>
    </footer>
  );
};

export default Footer;
