import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Hero from '../components/Hero/Hero';
import AboutMe from '../components/AboutMe/AboutMe';
import Skills from '../components/Skills/Skills';
import Work from '../components/Work/Work';
import Footer from '../components/Footer/Footer';
import Contact from '../components/Contact/Contact';

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <AboutMe />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
