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
                  gatsbyImageData(width: 704, placeholder: BLURRED, formats: [PNG])
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
      <section className="container mx-auto px-8 xl:px-64 py-24 lg:py-40" id="work">
        <div className="flex flex-col items-center justify-center">
          <h4 className="mb-6 xl:mb-12 text-xl lg:text-2xl text-melon font-sans font-bold tracking-wide whitespace-nowrap">
            Projects
          </h4>
          {projects.map(({ node }) => {
            const { frontmatter, html } = node;
            const { title, tech, github, img, external } = frontmatter;
            const image = getImage(img);

            return (
              <div key={title}>
                <div className="flex flex-col xl:flex-row w-full justify-center items-start xl:items-center xl:justify-between mb-32 xl:mb-48">
                  <div
                    className="relative rounded-sm"
                    style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
                    <a href={external}>
                      <GatsbyImage image={image} alt={title} />
                      <div className="absolute top-0 rounded-sm w-full h-full backdrop-filter backdrop-grayscale hover:opacity-0 transition duration-300 shadow-md" />
                    </a>
                  </div>
                  <div className="flex flex-col items-start justify-start xl:ml-20 xl:items-end xl:justify-between">
                    <div className="flex flex-col items-start xl:items-end mt-5 xl:mt-0">
                      <h3 className="text-sm lg:text-md text-silver font-mono font-bold xl:ml-5 tracking-wide">
                        Project
                      </h3>
                      <a href={external} className="mb-5">
                        <h3 className="text-2xl lg:text-3xl text-white hover:text-melon transition duration-300 font-sans font-bold">
                          {title}
                        </h3>
                      </a>
                    </div>
                    <div
                      className="mb-5 text-sm lg:text-md text-left xl:text-right text-white font-sans max-w-xl xl:max-w-lg"
                      dangerouslySetInnerHTML={{ __html: html }}
                    />
                    <div className="flex flex-col items-start xl:items-end">
                      <div className="flex flex-row mb-5">
                        {tech.map((item) => (
                          <div
                            key={item}
                            className="text-xs px-2 py-0.5 mr-3 xl:mr-0 xl:ml-3 rounded-sm border text-melon tracking-wide">
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
              </div>
            );
          })}
        </div>
      </section>
    </Fade>
  );
};

export default Work;
