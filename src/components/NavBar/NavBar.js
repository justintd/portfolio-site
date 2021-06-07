import React, { useState } from 'react';
import Fade from 'react-reveal';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const links = {
    about: {
      name: 'About',
      href: '#about'
    },
    work: {
      name: 'Work',
      href: '#Work'
    },
    contact: {
      name: 'Contact',
      href: '#Contact'
    },
    resume: {
      name: 'Resume',
      href: '#Resume',
      button: true
    }
  };

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="flex w-full fixed z-10">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center py-8 font-mono text-white tracking-wide bg-black z-10">
          <Fade top>
            <div className="text-2xl tracking-wide">jdinh.dev</div>
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
