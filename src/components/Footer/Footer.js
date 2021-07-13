import React from 'react';
import GithubIcon from '../icons/Github';
import LinkedInIcon from '../icons/LinkedIn';
import './Footer.css';

const Footer = () => (
  <footer className="container mx-auto px-8">
    <div className="flex justify-between items-center h-24">
      <div className="flex flex-row text-md text-white font-sans tracking-wide items-center justify-center">
        <a href="https://jdinh.dev" className="mr-2">
          <p>Justin Dinh © 2021</p>
        </a>
      </div>
      <div className="flex flex-row items-center">
        <a className="github-icon mr-5" href="https://github.com/justintd/portfolio-site">
          <GithubIcon />
        </a>
        <a className="linkedin-icon" href="https://github.com/justintd/portfolio-site">
          <LinkedInIcon />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
