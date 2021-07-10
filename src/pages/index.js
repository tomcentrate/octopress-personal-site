import React from "react"
import MainContainer from "../components/MainContainer";
import {graphql} from "gatsby";
import BlogPost from "../components/blog/BlogPost";

const IndexPage = ({data}) => {
    return (
        <MainContainer>

            {data.allMarkdownRemark.edges.map(({ node }) => {
                return (
                <BlogPost title={node.frontmatter.title} date={node.frontmatter.date} dangeroushtml={node.html}>
                    <h2 className="post-title">{node.frontmatter.title}</h2>
                </BlogPost>
                )})}
        </MainContainer>
    )
}

export default IndexPage


export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 5) {
      totalCount
      edges {
        node {
          id
          html
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