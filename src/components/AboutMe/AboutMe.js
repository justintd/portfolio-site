import React from 'react';
import Fade from 'react-reveal';

const AboutMe = () => (
  <Fade>
    <section className="container mx-auto px-8 xl:px-64 py-24 xl:py-40" id="about">
      <div className="flex flex-col xl:flex-row justify-center">
        <h4
          className="mb-5 text-xl lg:text-2xl text-melon font-sans font-bold xl:mr-20 xl:mb-0 tracking-wide whitespace-nowrap"
          style={{ minWidth: '120px' }}>
          About Me
        </h4>
        <div className="flex flex-col xl:ml-7">
          <p className="mb-5 text-md lg:text-xl text-white font-sans">
            Hey there! I&apos;m Justin, a front-end developer based in Southern California.
          </p>
          <p className="mb-5 text-md lg:text-xl text-white font-sans">
            I originally started my career in IT as a Systems Administrator for over four years, and
            eventually found my way into having a newfound passion for web development. I decided to
            pursue being a software engineer as a career path, and after many hours of learning
            through documentation, courses, and books — I eventually landed my first contract
            position with iGrad through Upwork.
          </p>
          <p className="mb-5 text-md lg:text-xl text-white font-sans">
            My goals are to provide amazing user experiences with a performant, responsive
            front-end, and translating designs into pixel-perfect user interface.
          </p>
          <p className="mb-5 text-md lg:text-xl text-white font-sans">
            When I&apos;m not hacking away at code, I enjoy gaming with friends, traveling, and
            spending time with my lovely dogs.
          </p>
        </div>
      </div>
    </section>
  </Fade>
);

export default AboutMe;
