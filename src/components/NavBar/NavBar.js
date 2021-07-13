import React, { useState } from 'react';
import Fade from 'react-reveal';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
import Avatar from '../../images/avatar.png';

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const links = {
    about: {
      name: 'About',
      href: '#about'
    },
    work: {
      name: 'Work',
      href: '#work'
    },
    contact: {
      name: 'Contact',
      href: '#contact'
    },
    resume: {
      name: 'Resume',
      href: '/resume.pdf',
      button: true
    }
  };

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="flex w-full fixed z-10">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center py-4 lg:py-8 font-mono text-white tracking-wide bg-black z-10">
          <Fade top>
            <a href="/" className="flex items-center">
              <div className="rounded-full bg-opacity-15 bg-gray">
                <img className="rounded-full" width="48" height="48" src={Avatar} alt="" />
              </div>
              <div className="font-sans tracking-wide font-bold ml-2">Justin Dinh</div>
            </a>
          </Fade>
          <NavDesktop
            links={links}
            handleToggle={handleToggle}
            isActive={isActive}
            setIsActive={setIsActive}
          />
          <NavMobile
            links={links}
            handleToggle={handleToggle}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
