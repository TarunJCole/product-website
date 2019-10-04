import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { IconContext } from "react-icons"
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa"

import headerStyles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header style={headerStyles}>
    <nav>
      <div>
        <ul>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <h2>{siteTitle}</h2>
      </div>
      <div>
        <ul>
          <li>
            <IconContext.Provider
              value={{ size: "2rem", style: { marginRight: "0.4rem" } }}
            >
              <FaFacebookSquare /> <span>Facebook</span>
            </IconContext.Provider>
          </li>
          <li>
            <IconContext.Provider
              value={{ size: "2rem", style: { marginRight: "0.4rem" } }}
            >
              <FaTwitterSquare /> <span>Twitter</span>
            </IconContext.Provider>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
