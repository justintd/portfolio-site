import React from 'react';

const Contact = () => (
  <section className="container mx-auto px-64 py-40" id="contact">
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-melon text-4xl font-bold tracking-wide font-sans mb-5">Contact Me</h2>
      <p className="mb-6 text-xl text-white font-sans text-center max-w-3xl">
        I&apos;m currently looking for new opportunities, so please don&apos;t hesitate to reach
        out! If you just simply want to reach out and just say hi, I would love to hear from you!
        I&apos;ll get back to messages as soon as I can. Thanks!
      </p>
      <p className="mb-2 text-xl text-white font-sans text-center">Drop by my inbox at:</p>
      <a href="mailto:justintdinh1@gmail.com">
        <p className="mb-5 font-bold text-xl text-white font-sans text-center">
          justintdinh1@gmail.com
        </p>
      </a>
    </div>
  </section>
);

export default Contact;
