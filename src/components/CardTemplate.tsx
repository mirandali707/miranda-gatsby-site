import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from 'gatsby-plugin-mdx'
// import Layout from "../components/layout";

const CardTemplate = ({ data }) => {
  const { mdx } = data;
  const { frontmatter, body } = mdx;
  return (
      <MDXRenderer localImages={frontmatter.embeddedImagesLocal}>
        {body}
      </MDXRenderer>
  );
};

// export const pageQuery = graphql`
//   query($slug: String!) {
//     mdx(slug: { eq: $slug }) {
//       slug
//       body
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         title
//         embeddedImagesLocal {
//           childImageSharp {
//             gatsbyImageData
//           }
//         }
//       }
//     }
//   }
// `;

// export default CardTemplate;