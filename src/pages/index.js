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
      featuresImage: file(relativePath: { eq: "phoneFrontBack.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
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
          <p className="lead">The only smartphone you will ever need.</p>
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
      <div className={indexStyles.features}>
        <div className={indexStyles.featuresImgContainer}>
          <Img
            fluid={data.featuresImage.childImageSharp.fluid}
            alt="Smartphone front and back"
          />
        </div>
        <div className={indexStyles.featuresText}>
          <h2>Fully Featured Android Smartphone</h2>
          <ul>
            <li>15/30/60 GB Storage</li>
            <li>2/4 GB Memory</li>
            <li>Latest Android OS</li>
            <li>16 Megapixel Camera</li>
            <li>2.5mm Headphone Jack</li>
            <li>2.5GHz Processor</li>
            <li>7-inch Display</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
