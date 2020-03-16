import React from "react";
import { graphql } from "gatsby"
import MainContainer from "../components/MainContainer";
import BlogPost from "../components/blog/BlogPost";
export default ({data}) => {
    const post = data.markdownRemark
    return (
        <MainContainer>
            <h1 className="post-title">{post.frontmatter.title}</h1>
            <BlogPost dangeroushtml={post.html} date={post.frontmatter.date} />
        </MainContainer>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`