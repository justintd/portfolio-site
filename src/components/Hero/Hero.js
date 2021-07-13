import React from 'react';
import Fade from 'react-reveal';
import './Hero.css';

const Hero = () => (
  <section className="container mx-auto px-8">
    <Fade>
      <div className="block flex flex-row items-center justify-center h-screen">
        <div className="flex items-start relative vertical-text mr-4">
          <a
            className="font-mono tracking-wide lg:text-sm md:text-xs text-silver mb-5"
            href="mailto:justintdinh1@gmail.com">
            justintdinh1@gmail.com
          </a>
        </div>
        <div className="flex flex-col justify-center w-full">
          <div>
            <h1 className="mb-5 lg:text-xl text-md text-melon font-mono">Hi I&apos;m,</h1>
          </div>
          <div>
            <h2 className="mb-8 lg:text-7xl text-5xl font-bold font-sans text-white leading-none">
              Justin Dinh.
            </h2>
          </div>
          <div>
            <h2 className="lg:text-7xl text-5xl pb-2 pr-1 font-bold font-sans text-black w-auto inline-block leading-none bg-melon">
              I build websites.
            </h2>
          </div>
          <div>
            <p className="my-8 text-gray lg:text-xl text-md w-120">
              I'm a software engineer who&apos;s passionate about creating things for the web.
            </p>
          </div>
          <div>
            <button
              className="lg:px-5 py-2 lg:text-md text-sm px-3 rounded-sm border focus:outline-none font-mono text-melon tracking-wide hover:bg-melon hover:bg-opacity-25 transition duration-300"
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
