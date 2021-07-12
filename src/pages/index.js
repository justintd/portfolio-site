import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Hero from '../components/Hero/Hero';
import AboutMe from '../components/AboutMe/AboutMe';

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <AboutMe />
    </div>
  );
}
