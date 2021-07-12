import React from 'react';
import Fade from 'react-reveal';
// import Chevron from '../../images/chevron-down.svg';
import './Hero.css';

const Hero = () => (
  <section className="container mx-auto px-8">
    <Fade>
      <div className="block flex flex-row items-center justify-center h-screen">
        <div className="flex items-start relative vertical-text mr-4">
          <p className="font-mono tracking-wide text-sm text-silver mb-5">contact@jdinh.dev</p>
        </div>
        <div className="flex flex-col justify-center w-full">
          <div>
            <h1 className="mb-5 text-xl text-melon font-mono">Hi I&apos;m,</h1>
          </div>
          <div>
            <h2 className="mb-8 text-7xl font-bold font-sans text-white leading-none">
              Justin Dinh.
            </h2>
          </div>
          <div>
            <h2 className="text-7xl pb-2 pr-1 font-bold font-sans text-black w-auto inline-block leading-none bg-melon">
              I build websites.
            </h2>
          </div>
          <div>
            <p className="my-8 text-gray text-xl w-120">
              I'm a software engineer who&apos;s passionate about creating things for the web.
            </p>
          </div>
          <div>
            <button
              className="px-5 py-2 rounded-sm border focus:outline-none font-mono text-melon tracking-wide hover:bg-melon hover:bg-opacity-25 transition duration-300"
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
