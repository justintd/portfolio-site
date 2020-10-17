import React, { useState } from "react"

const NavBar = () => {
  const [isActive, setIsActive] = useState(false)

  const handleToggle = () => {
    setIsActive(!isActive)
  }

  return (
    <div className="mx-24 py-8 font-mono text-white tracking-wide">
      <div className="flex items-center justify-between">
        <div className="text-2xl tracking-wide">LOGO</div>
        <nav className="hidden lg:block">
          <ul className="flex space-x-12 items-center">
            <li>
              <a href="#" className="">
                About
              </a>
            </li>
            <li>
              <a href="#" className="">
                Work
              </a>
            </li>
            <li>
              <a href="#" className="">
                Contact
              </a>
            </li>
            <li>
              <button className="px-3 py-1 rounded-sm border focus:outline-none text-melon tracking-wide">
                Resume
              </button>
            </li>
          </ul>
        </nav>
        <nav className="lg:hidden">
          <div className="absolute"></div>
          <div></div>
          <div
            className={isActive ? `hamburger-menu is-active` : `hamburger-menu`}
            onClick={handleToggle}
          >
            <span className="hamburger-line bg-white"></span>
            <span className="hamburger-line bg-white"></span>
            <span className="hamburger-line bg-white"></span>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavBar
