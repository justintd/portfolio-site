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
              <li key={props.links[key].name}>
                <a
                  href={props.links[key].href}
                  className="hover:text-melon transition duration-300">
                  {props.links[key].name}
                </a>
              </li>
            );
          }
          return (
            <li key={props.links[key].name}>
              <a href={props.links[key].href}>
                <button
                  className="px-3 py-2 border text-melon tracking-wide rounded-sm hover:bg-melon hover:bg-opacity-100 hover:text-black transition duration-300"
                  type="button">
                  {props.links[key].name}
                </button>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  </Fade>
);

export default NavDesktop;
