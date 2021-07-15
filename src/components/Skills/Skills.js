import React from 'react';
import Fade from 'react-reveal';

const AboutMe = () => (
  <Fade>
    <section className="container mx-auto px-8 xl:px-64 py-24 xl:py-40" id="about">
      <div className="flex flex-col xl:flex-row justify-center">
        <h4
          className="mb-6 text-xl lg:text-2xl xl:mr-20 text-melon font-sans font-bold tracking-wide whitespace-nowrap xl:text-right"
          style={{ minWidth: '120px' }}>
          Skills
        </h4>
        <div className="flex flex-row flex-wrap w-full">
          <div className="flex flex-col mx-7 mb-5 flex-1">
            <h4 className="lg:text-xl font-sans font-bold text-white mb-3 tracking-wide">
              Languages
            </h4>
            <p className="lg:text-lg font-sans text-white mb-2 whitespace-nowrap">
              <span className="text-melon">• </span>JavaScript
            </p>
            <p className="lg:text-lg font-sans text-white mb-2 whitespace-nowrap">
              <span className="text-melon">• </span>TypeScript
            </p>
            <p className="lg:text-lg font-sans text-white mb-2 whitespace-nowrap">
              <span className="text-melon">• </span>HTML
            </p>
            <p className="lg:text-lg font-sans text-white mb-2 whitespace-nowrap">
              <span className="text-melon">• </span>CSS
            </p>
            <p className="lg:text-lg font-sans text-white mb-2 whitespace-nowrap">
              <span className="text-melon">• </span>Python
            </p>
          </div>
          <div className="flex flex-col mx-7 mb-5 flex-1">
            <h4 className="lg:text-xl font-sans font-bold text-white mb-3 tracking-wide">
              Frameworks
            </h4>
            <p className="lg:text-lg font-sans text-white mb-2 whitespace-nowrap">
              <span className="text-melon">• </span>React
            </p>
            <p className="lg:text-lg font-sans text-white mb-2 whitespace-nowrap">
              <span className="text-melon">• </span>Redux
            </p>
            <p className="lg:text-lg font-sans text-white mb-2 whitespace-nowrap">
              <span className="text-melon">• </span>Node
            </p>
            <p className="lg:text-lg font-sans text-white mb-2 whitespace-nowrap">
              <span className="text-melon">• </span>Express
            </p>
            <p className="lg:text-lg font-sans text-white mb-2 whitespace-nowrap">
              <span className="text-melon">• </span>jQuery
            </p>
          </div>
          <div className="flex flex-col mx-7 mb-5 flex-1">
            <h4 className="lg:text-xl font-sans font-bold text-white mb-3 tracking-wide">Tools</h4>
            <p className="lg:text-lg font-sans text-white mb-2 whitespace-nowrap">
              <span className="text-melon">• </span>Git
            </p>
            <p className="lg:text-lg font-sans text-white mb-2 whitespace-nowrap">
              <span className="text-melon">• </span>AWS
            </p>
            <p className="lg:text-lg font-sans text-white mb-2 whitespace-nowrap">
              <span className="text-melon">• </span>Webpack
            </p>
            <p className="lg:text-lg font-sans text-white mb-2 whitespace-nowrap">
              <span className="text-melon">• </span>Firebase
            </p>
          </div>
          <div className="flex flex-col mx-7 mb-5 flex-1">
            <h4 className="lg:text-xl font-sans font-bold text-white mb-3 tracking-wide">Design</h4>
            <p className="lg:text-lg font-sans text-white mb-2 whitespace-nowrap">
              <span className="text-melon">• </span>Figma
            </p>
            <p className="lg:text-lg font-sans text-white mb-2 whitespace-nowrap">
              <span className="text-melon">• </span>InDesign
            </p>
            <p className="lg:text-lg font-sans text-white mb-2 whitespace-nowrap">
              <span className="text-melon">• </span>Adobe XD
            </p>
          </div>
        </div>
      </div>
    </section>
  </Fade>
);

export default AboutMe;
