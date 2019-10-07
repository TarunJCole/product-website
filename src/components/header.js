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
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/products/">
            <li>Products</li>
          </Link>
          <Link to="/contact/">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      <div>
        <Link to="/">
          <h2>{siteTitle}</h2>
        </Link>
      </div>
      <div>
        <ul>
          <a href="https://www.facebook.com">
            <li>
              <IconContext.Provider
                value={{ size: "2rem", style: { marginRight: "0.4rem" } }}
              >
                <FaFacebookSquare /> <span>Facebook</span>
              </IconContext.Provider>
            </li>
          </a>
          <a href="https://www.twitter.com">
            <li>
              <IconContext.Provider
                value={{ size: "2rem", style: { marginRight: "0.4rem" } }}
              >
                <FaTwitterSquare /> <span>Twitter</span>
              </IconContext.Provider>
            </li>
          </a>
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
