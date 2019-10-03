import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header style={headerStyles}>
    <nav>
      <ul>
        <li>Contact</li>
      </ul>
      <div>
        <h2>{siteTitle}</h2>
      </div>
      <div>
        <ul>
          <li>item</li>
          <li>item</li>
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
