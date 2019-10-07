import React from "react"
import { Link } from "gatsby"
import { IconContext } from "react-icons"
import { FaAngleRight, FaTimesCircle, FaCheckCircle } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

import productStyles from "./products.module.css"

export default function Products() {
  return (
    <Layout>
      <SEO title="Products" />
      <section className={productStyles.products}>
        <div className={productStyles.card}>
          <h2>Standard Edition</h2>
          <h3>£ 199</h3>
          <hr />
          <ul>
            <li>15 GB Storage</li>
            <li>2 GB Memory</li>
            <li>Latest Android OS</li>
            <li>8 Megapixel Camera</li>
            <li>2.5mm Headphone Jack</li>
            <li>2GHz Processor</li>
            <li>6.5-inch Display</li>
          </ul>
          <ul>
            <li>
              <IconContext.Provider
                value={{
                  size: "1.2rem",
                  color: "grey",
                  style: { marginRight: "0.5rem", verticalAlign: "middle" },
                }}
              >
                <FaTimesCircle />
              </IconContext.Provider>
              2-year Warranty
            </li>
            <li>
              <IconContext.Provider
                value={{
                  size: "1.2rem",
                  color: "grey",
                  style: { marginRight: "0.5rem", verticalAlign: "middle" },
                }}
              >
                <FaTimesCircle />
              </IconContext.Provider>
              24/7 Support
            </li>
            <li>
              <IconContext.Provider
                value={{
                  size: "1.2rem",
                  color: "grey",
                  style: { marginRight: "0.5rem", verticalAlign: "middle" },
                }}
              >
                <FaTimesCircle />
              </IconContext.Provider>
              50% off Repairs
            </li>
          </ul>
          <div>
            <Link to="/contact/">Select</Link>
          </div>
        </div>
        <div className={productStyles.card}>
          <h2 style={{ background: "#90f099" }}>Pro Edition</h2>
          <h3>£ 299</h3>
          <hr />
          <ul>
            <li>30 GB Storage</li>
            <li>2 GB Memory</li>
            <li>Latest Android OS</li>
            <li>8 Megapixel Camera</li>
            <li>2.5mm Headphone Jack</li>
            <li>2.5GHz Processor</li>
            <li>6.5-inch Display</li>
          </ul>
          <ul>
            <li>
              <IconContext.Provider
                value={{
                  size: "1.2rem",
                  color: "green",
                  style: { marginRight: "0.5rem", verticalAlign: "middle" },
                }}
              >
                <FaCheckCircle />
              </IconContext.Provider>
              2-year Warranty
            </li>
            <li>
              <IconContext.Provider
                value={{
                  size: "1.2rem",
                  color: "grey",
                  style: { marginRight: "0.5rem", verticalAlign: "middle" },
                }}
              >
                <FaTimesCircle />
              </IconContext.Provider>
              24/7 Support
            </li>
            <li>
              <IconContext.Provider
                value={{
                  size: "1.2rem",
                  color: "grey",
                  style: { marginRight: "0.5rem", verticalAlign: "middle" },
                }}
              >
                <FaTimesCircle />
              </IconContext.Provider>
              50% off Repairs
            </li>
          </ul>
          <div>
            <Link to="/contact/">Select</Link>
          </div>
        </div>
        <div className={productStyles.card}>
          <h2 style={{ background: "#edd374" }}>Ultimate Edition</h2>
          <h3>£ 499</h3>
          <hr />
          <ul>
            <li>60 GB Storage</li>
            <li>4 GB Memory</li>
            <li>Latest Android OS</li>
            <li>16 Megapixel Camera</li>
            <li>2.5mm Headphone Jack</li>
            <li>2.5GHz Processor</li>
            <li>7-inch Display</li>
          </ul>
          <ul>
            <li>
              <IconContext.Provider
                value={{
                  size: "1.2rem",
                  color: "green",
                  style: { marginRight: "0.5rem", verticalAlign: "middle" },
                }}
              >
                <FaCheckCircle />
              </IconContext.Provider>
              2-year Warranty
            </li>
            <li>
              <IconContext.Provider
                value={{
                  size: "1.2rem",
                  color: "green",
                  style: { marginRight: "0.5rem", verticalAlign: "middle" },
                }}
              >
                <FaCheckCircle />
              </IconContext.Provider>
              24/7 Support
            </li>
            <li>
              <IconContext.Provider
                value={{
                  size: "1.2rem",
                  color: "green",
                  style: { marginRight: "0.5rem", verticalAlign: "middle" },
                }}
              >
                <FaCheckCircle />
              </IconContext.Provider>
              50% off Repairs
            </li>
          </ul>
          <div>
            <Link to="/contact/">Select</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
