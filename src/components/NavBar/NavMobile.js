import React from 'react';
import Fade from 'react-reveal';
import './Navbar.css';

const NavMobile = (props) => (
  <>
    <nav className="lg:hidden">
      <button
        className={`mobile-overlay absolute bg-black inset-0 transition-all ease-in-out duration-300 opacity-0 h-screen w-screen ${
          props.isActive ? 'opacity-50' : 'invisible'
        }`}
        onClick={props.handleToggle}
        type="button"
      />
      <aside
        className={`transform top-0 bottom-0 right-0 w-8/12 md:w-5/12 bg-black-2 fixed h-screen overflow-auto ease-in-out transition-all duration-300 z-30 ${
          props.isActive ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <ul className="flex flex-col h-full items-center justify-center align-center">
          {Object.keys(props.links).map((key) => {
            if (!props.links[key].button) {
              return (
                <li className="my-3" key={props.links[key].name}>
                  <a
                    href={props.links[key].href}
                    className="hover:text-melon text-lg transition duration-300">
                    {props.links[key].name}
                  </a>
                </li>
              );
            }
            return (
              <li className="my-3" key={props.links[key].name}>
                <button
                  className="px-5 py-2 text-lg rounded-sm border focus:outline-none text-melon tracking-wide hover:bg-melon hover:bg-opacity-25 transition-all ease-in-out duration-300"
                  type="button">
                  <a href={props.links[key].href}>{props.links[key].name}</a>
                </button>
              </li>
            );
          })}
        </ul>
      </aside>
      <Fade top>
        <button className="relative cursor-pointer z-40" onClick={props.handleToggle} type="button">
          <span
            className={`block bg-white w-6 h-1 my-1 mx-auto transition-all ease-in-out duration-300 ${
              props.isActive ? 'transform translate-y-2 rotate-45' : null
            }`}
          />
          <span
            className={`block bg-white w-6 h-1 my-1 mx-auto ease-in-out duration-300 ${
              props.isActive ? 'opacity-0' : null
            }`}
          />
          <span
            className={`block bg-white w-6 h-1 my-1 mx-auto ease-in-out duration-300 ${
              props.isActive ? 'transform -translate-y-2 -rotate-45' : null
            }`}
          />
        </button>
      </Fade>
    </nav>
  </>
);

export default NavMobile;
