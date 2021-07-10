import React from "react";
import MainContainer from "../components/MainContainer";
import { graphql, Link } from "gatsby";

const Blog = ({data}) => {
    return (<MainContainer>
        <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                    <Link to={node.fields.slug}>
                    <h3>
                        {node.frontmatter.title}{" "}<span>— {node.frontmatter.date}</span>
                    </h3>
                    </Link>
                    <p>{node.excerpt}</p>
                </div>
            ))}
        </div>
    </MainContainer>)
}

export default Blog
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`