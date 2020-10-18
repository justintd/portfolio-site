import React, { useState } from "react"

const NavBar = () => {
  const [isActive, setIsActive] = useState(false)

  const handleToggle = () => {
    setIsActive(!isActive)
  }

  return (
    <div className="px-12 py-8 fixed w-full font-mono text-white tracking-wide">
      <div className="flex items-center justify-between">
        <div className="text-2xl tracking-wide">LOGO</div>
        <nav className="hidden lg:block">
          <ul className="flex space-x-12 items-center">
            <li>
              <a href="#" className="hover:text-melon transition duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-melon transition duration-300">
                Work
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-melon transition duration-300">
                Contact
              </a>
            </li>
            <li>
              <button className="px-3 py-2 rounded-sm border focus:outline-none text-melon tracking-wide hover:bg-melon hover:bg-opacity-25 transition duration-300">
                Resume
              </button>
            </li>
          </ul>
        </nav>
        <nav className="lg:hidden">
          <div
            className={
              isActive
                ? "absolute bg-black inset-0 transition-all ease-in-out duration-500 opacity-50 h-screen w-screen z-20"
                : null
            }
            onClick={handleToggle}
          ></div>
          <aside
            className={
              isActive
                ? "transform top-0 bottom-0 right-0 w-8/12 md:w-5/12 bg-black-2 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 translate-x-0"
                : "transform top-0 bottom-0 right-0 w-8/12 md:w-5/12 bg-black-2 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 translate-x-full"
            }
          >
            <ul className="flex flex-col h-full items-center justify-center align-center">
              <li className="my-3">
                <a
                  href="#"
                  className="hover:text-melon text-lg transition duration-300"
                >
                  About
                </a>
              </li>
              <li className="my-3">
                <a
                  href="#"
                  className="hover:text-melon text-lg transition duration-300"
                >
                  Work
                </a>
              </li>
              <li className="my-3">
                <a
                  href="#"
                  className="hover:text-melon text-lg transition duration-300"
                >
                  Contact
                </a>
              </li>
              <li className="my-3">
                <button className="px-5 py-2 text-lg rounded-sm border focus:outline-none text-melon tracking-wide hover:bg-melon hover:bg-opacity-25 transition duration-300">
                  Resume
                </button>
              </li>
            </ul>
          </aside>
          <div
            className={
              isActive
                ? "hamburger-menu relative is-active z-40"
                : "hamburger-menu relative z-40"
            }
            onClick={handleToggle}
          >
            <span className="hamburger-line bg-white z-40"></span>
            <span className="hamburger-line bg-white z-40"></span>
            <span className="hamburger-line bg-white z-40"></span>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavBar
