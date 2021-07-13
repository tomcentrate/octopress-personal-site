import React from "react"
import {graphql} from "gatsby"
import IdeaBox from "../../components/fun_stuff/IdeaBox";
import Layout from "../../components/fun_stuff/Layout";

const IndexPage = ({data}) => {
    return (
        <Layout>
            <div className="main_content">
                {data.allIdeasJson.edges.map(({node}) => {
                    return (
                        <IdeaBox {...node}></IdeaBox>
                    )
                })}
            </div>
        </Layout>
    )
}

export const query = graphql`
  {
    allIdeasJson {
      edges {
        node {
          id
          idea
          type
          completed
          abandoned
        }
      }
    }
  }
`

export default IndexPage