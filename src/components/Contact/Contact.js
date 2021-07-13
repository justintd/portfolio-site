import React from 'react';
import Fade from 'react-reveal';

const Contact = () => (
  <Fade>
    <section className="container mx-auto px-8 lg:px-64 h-screen" id="contact">
      <div className="flex flex-col h-full justify-center items-center">
        <h2 className="text-melon text-3xl lg:text-4xl font-bold tracking-wide font-sans mb-5">
          Contact Me
        </h2>
        <p className="mb-6 text-lg lg:text-xl text-white font-sans text-center max-w-3xl">
          I&apos;m currently open for new opportunities, so please don&apos;t hesitate to reach out.
          If you just simply want to reach out and just say hi, I would love to hear from you.
          I&apos;ll get back to messages as soon as I can. Thanks!
        </p>
        <p className="mb-1 text-lg lg:text-xl text-white font-sans text-center">
          Drop by my inbox at:
        </p>
        <a href="mailto:justintdinh1@gmail.com">
          <p className="mb-5 font-bold text-lg lg:text-xl text-white font-sans text-center hover:text-melon transition duration-300">
            justintdinh1@gmail.com
          </p>
        </a>
      </div>
    </section>
  </Fade>
);

export default Contact;
