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
            I began my career in IT as a Systems Administrator, where I gained over four years of
            experience managing and optimizing systems. Over time, my interest shifted toward web
            development, and I discovered a deep passion for software engineering. Motivated to
            pursue this new path, I dedicated myself to learning through documentation, online
            courses, and books. After countless hours of self-study, I secured my first role as a
            Front-End Developer at iGrad.
          </p>
          <p className="mb-5 text-md lg:text-xl text-white font-sans">
            A year later, I started as a Front-End Developer at Shift7 Digital, a consulting firm.
            Through hard work and dedication, I advanced to a Senior Front-End Developer position.
            In both roles, I had the opportunity to work on diverse projects for clients such
            as&nbsp;
            <a href="https://www.slb.com/" className="text-melon">
              Schlumberger&nbsp;
            </a>
            <a href="https://www.globalindustrial.com/" className="text-melon">
              Global Industrial&nbsp;
            </a>
            <a href="https://www.fleetpride.com/" className="text-melon">
              Fleetpride
            </a>
            , and more. My experience at Shift7 allowed me to refine my skills, tackle unique
            challenges, and contribute to a wide range of impactful software solutions.
          </p>
        </div>
      </div>
    </section>
  </Fade>
);

export default AboutMe;
