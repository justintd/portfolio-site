import React from 'react';
import Fade from 'react-reveal';
import GithubIcon from '../icons/Github';
import LinkedInIcon from '../icons/LinkedIn';
import MailIcon from '../icons/Mail';
import './Footer.css';

const Footer = () => (
  <div className="relative">
    <div className="flex w-full absolute bottom-0">
      <footer className="container mx-auto px-8">
        <div className="flex justify-between items-center h-24">
          <Fade bottom>
            <div className="flex flex-row text-md text-white font-sans tracking-wide items-center justify-center">
              <a href="https://jdinh.dev" className="mr-2">
                <p>Justin Dinh © 2021</p>
              </a>
            </div>
            <div className="flex flex-row items-center">
              <a className="mail-icon mr-5" href="mailto:justintdinh1@gmail.com">
                <MailIcon />
              </a>
              <a className="github-icon mr-5" href="https://github.com/justintd">
                <GithubIcon />
              </a>
              <a className="linkedin-icon" href="https://www.linkedin.com/in/justindinh/">
                <LinkedInIcon />
              </a>
            </div>
          </Fade>
        </div>
      </footer>
    </div>
  </div>
);

export default Footer;
