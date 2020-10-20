import React from "react"
import Fade from "react-reveal"

const NavDesktop = props => {
  return (
    <>
      <Fade top>
        <nav className="hidden lg:block">
          <ul className="flex space-x-12 items-center">
            {/* Renders links object with map */}
            {Object.keys(props.links).map((key, value) => {
              if (!props.links[key].button) {
                return (
                  <li>
                    <a
                      href={props.links[key].href}
                      className="hover:text-melon transition duration-300"
                    >
                      {props.links[key].name}
                    </a>
                  </li>
                )
              } else {
                return (
                  <li>
                    <button className="px-3 py-2 rounded-sm border focus:outline-none text-melon tracking-wide hover:bg-melon hover:bg-opacity-25 transition duration-300">
                      <a href={props.links[key].href}>
                        {props.links[key].name}
                      </a>
                    </button>
                  </li>
                )
              }
            })}
          </ul>
        </nav>
      </Fade>
    </>
  )
}

export default NavDesktop
