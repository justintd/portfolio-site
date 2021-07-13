import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

export default function NotFound() {
  return (
    <div>
      <NavBar />
      <section className="container mx-auto px-8 lg:px-64 py-24 lg:py-40 h-screen">
        <div className="flex flex-col">
          <h1 className="text-4xl">Yikes!</h1>
          <h3 className="text-2xl">Unfortunately, nothing's here.</h3>
          <p className="text-lg">Maybe there's a typo in the URL or the page no longer exists?</p>
          <a href="/#">
            <button
              className="py-1 px-2 sm:py-2 lg:px-5 lg:text-md text-xs sm:text-sm rounded-sm border focus:outline-none font-mono text-melon tracking-wide hover:bg-melon hover:bg-opacity-25 transition duration-300"
              type="button">
              Go Back home
            </button>
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
