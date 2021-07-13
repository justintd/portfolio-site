import React from 'react';
import config from 'react-reveal/globals';
import NavBar from '../components/NavBar/NavBar';
import Hero from '../components/Hero/Hero';
import AboutMe from '../components/AboutMe/AboutMe';
import Work from '../components/Work/Work';
import Footer from '../components/Footer/Footer';
import Contact from '../components/Contact/Contact';

config({ ssrFadeout: true });

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <AboutMe />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
