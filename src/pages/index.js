import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import indexStyles from "./index.module.css"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      phoneImage: file(relativePath: { eq: "phone.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <div className={indexStyles.index}>
        <div className="title">
          <h1>Meet Androphone</h1>
          <p className="lead">
            The latest and only android phone you will ever need.
          </p>
          <button>See Features</button>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
