import React from 'react';
import Fade from 'react-reveal';

const NavDesktop = (props) => (
  <Fade top>
    <nav className="hidden lg:block">
      <ul className="flex space-x-12 items-center">
        {/* Renders links object with map */}
        {Object.keys(props.links).map((key) => {
          if (!props.links[key].button) {
            return (
              <li key={key.name}>
                <a
                  href={props.links[key].href}
                  className="hover:text-melon transition duration-300">
                  {props.links[key].name}
                </a>
              </li>
            );
          }
          return (
            <li key={key.name}>
              <button
                className="px-3 py-2 rounded-sm border focus:outline-none text-melon tracking-wide hover:bg-melon hover:bg-opacity-25 transition duration-300"
                type="button">
                <a href={props.links[key].href}>{props.links[key].name}</a>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  </Fade>
);

export default NavDesktop;
