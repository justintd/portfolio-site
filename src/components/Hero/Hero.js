import React from 'react';
import Fade from 'react-reveal';
import './Hero.css';

const Hero = () => (
  <section className="container mx-auto px-8">
    <Fade>
      <div className="flex flex-row items-center justify-center h-screen">
        <div className="flex items-start relative vertical-text mr-4 hidden lg:flex">
          <a
            className="font-mono tracking-wide text-xs lg:text-sm text-silver mb-5"
            href="mailto:justintdinh1@gmail.com">
            justintdinh1@gmail.com
          </a>
        </div>
        <div className="flex flex-col justify-center w-full">
          <div className="flex">
            <h1 className="mb-3 lg:mb-5 text-sm sm:text-md lg:text-xl text-melon font-mono">
              Hi I&apos;m,
            </h1>
          </div>
          <div className="flex">
            <h2 className="mb-4 lg:mb-8 text-4xl sm:text-5xl lg:text-7xl font-bold font-sans text-white leading-none">
              Justin Dinh.
            </h2>
          </div>
          <div className="flex">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl pb-2 pr-1 font-bold font-sans text-black w-auto inline-block leading-none bg-melon">
              I build websites.
            </h2>
          </div>
          <div className="flex">
            <p className="my-4 lg:my-8 text-gray lg:text-xl text-sm w-120">
              I&apos;m a software engineer who&apos;s passionate about creating things for the web.
            </p>
          </div>
          <div>
            <button
              className="py-1 px-2 sm:py-2 lg:px-5 lg:text-md text-xs sm:text-sm border rounded-sm font-mono text-melon tracking-wide hover:text-black hover:bg-melon overflow-hidden hover:bg-opacity-100 transition duration-300"
              type="button">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </Fade>
  </section>
);

export default Hero;
