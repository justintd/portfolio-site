import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

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
    <section className="container mx-auto px-64 py-40">
      <div className="block flex flex-col items-center justify-center">
        <h4 className="mb-5 text-xl text-melon font-sans font-bold mr-24 whitespace-nowrap">
          Work
        </h4>
        <div className="flex flex-col">
          {projects.map(({ node }) => {
            const { frontmatter, html } = node;
            const { title, tech, github, img, external } = frontmatter;
            const image = getImage(img);

            return (
              <div key={title}>
                <GatsbyImage image={image} alt={title} />
                <h4 className="mb-5 text-xl text-white font-sans">{title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
