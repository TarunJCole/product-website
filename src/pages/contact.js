import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import contactStyles from "./contact.module.css"

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact" />
      <div>
        <div className={contactStyles.contact}>
          <form action="" className={contactStyles.contactForm}>
            <h2>Contact Us</h2>
            <input type="text" placeholder="Your Name" name="name" />
            <input type="email" placeholder="Your Email" name="email" />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Layout>
  )
}
