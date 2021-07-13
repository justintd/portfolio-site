import React from 'react';
import Fade from 'react-reveal';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import ExternalIcon from '../icons/External';
import GithubIcon from '../icons/Github';
import './Work.css';

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              tech
              github
              external
              img {
                childImageSharp {
                  gatsbyImageData(width: 600, placeholder: BLURRED, formats: [PNG])
                }
              }
            }
            html
          }
        }
      }
    }
  `);

  const projects = data.projects.edges.filter(({ node }) => node);

  return (
    <Fade>
      <section className="container mx-auto px-8 lg:px-64 py-24 lg:py-40" id="work">
        <div className="block flex flex-col items-center justify-center">
          <h4 className="mb-5 lg:mb-12 text-xl lg:text-2xl text-melon font-sans font-bold tracking-wide whitespace-nowrap">
            My Work
          </h4>
          {projects.map(({ node }) => {
            const { frontmatter, html } = node;
            const { title, tech, github, img, external } = frontmatter;
            const image = getImage(img);

            return (
              <div
                key={title}
                className="flex flex-col lg:flex-row w-full justify-center items-start lg:justify-between mb-32 lg:mb-48">
                <div
                  className="relative rounded-sm"
                  style={{ boxShadow: '8px 8px 9px 0px rgba(0,0,0,0.25)' }}>
                  <a href={external}>
                    <GatsbyImage image={image} alt={title} />
                    <div className="absolute top-0 rounded-sm w-full h-full backdrop-filter backdrop-grayscale hover:opacity-0 transition duration-300 shadow-md" />
                  </a>
                </div>
                <div className="flex flex-col items-start justify-start lg:ml-20 lg:items-end lg:justify-between">
                  <div className="flex flex-col items-start lg:items-end mt-5 lg:mt-0">
                    <h3 className="text-sm lg:text-md text-white font-mono font-bold lg:ml-5 tracking-wide">
                      Project
                    </h3>
                    <h3 className="mb-5 text-2xl lg:text-3xl text-melon font-sans font-bold lg:ml-5">
                      {title}
                    </h3>
                  </div>
                  <div
                    className="mb-5 text-sm lg:text-md text-left lg:text-right text-white font-sans max-w-lg"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                  <div className="flex flex-col items-start lg:items-end">
                    <div className="flex flex-row mb-5">
                      {tech.map((item) => (
                        <div
                          key={item}
                          className="text-xs lg:text-sm px-1 lg:px-2 py-0.5 mr-2 lg:ml-3 rounded-sm border focus:outline-none text-melon tracking-wide"
                          type="button">
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-row">
                      <a className="github-icon mr-3" href={github}>
                        <GithubIcon />
                      </a>
                      <a className="external-icon" href={external}>
                        <ExternalIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Fade>
  );
};

export default Work;
