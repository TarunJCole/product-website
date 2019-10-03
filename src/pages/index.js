import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { IconContext } from "react-icons"
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import indexStyles from "./index.module.css"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      phoneImage: file(relativePath: { eq: "phone.png" }) {
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
          <div>
            <IconContext.Provider value={{ size: "2rem" }}>
              <a href="https://www.facebook.com" className={indexStyles.icon}>
                <FaFacebookSquare />
              </a>
            </IconContext.Provider>
            <IconContext.Provider value={{ size: "2rem" }}>
              <a href="https://www.twitter.com" className={indexStyles.icon}>
                <FaTwitterSquare />
              </a>
            </IconContext.Provider>
          </div>
        </div>
        <div className={indexStyles.imageContainer}>
          <Img
            fluid={data.phoneImage.childImageSharp.fluid}
            alt="Smartphone front"
          />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
