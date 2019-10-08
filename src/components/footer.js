import React from "react"
import { IconContext } from "react-icons"
import { FaReact, FaHtml5, FaCss3, FaNodeJs } from "react-icons/fa"

import footerStyles from "./footer.module.css"

export default function Footer() {
  return (
    <div className={footerStyles.footer}>
      <div>
        Example website created with:
        <span>
          <IconContext.Provider
            value={{
              size: "1.5rem",
              color: "#e34f26",
              style: { margin: "0 0.5rem 0 1.5rem", verticalAlign: "middle" },
            }}
          >
            <FaHtml5 />
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              size: "1.5rem",
              color: "#4285F4",
              style: { margin: "0 0.5rem", verticalAlign: "middle" },
            }}
          >
            <FaCss3 />
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              size: "1.5rem",
              color: "#00d8ff",
              style: { margin: "0 0.5rem", verticalAlign: "middle" },
            }}
          >
            <FaReact />
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              size: "1.5rem",
              color: "#6cc24a",
              style: { margin: "0 0.5rem", verticalAlign: "middle" },
            }}
          >
            <FaNodeJs />
          </IconContext.Provider>
        </span>
      </div>
      <div>&copy; Tc Web Services</div>
    </div>
  )
}
