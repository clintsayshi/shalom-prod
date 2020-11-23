import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

//CSS
import "../styles/global.css"
import styles from "../components/hero.module.css"

const Hero = ({ pageTitle }) => {
  if (pageTitle.length > 2) {
    return (
      <div className={styles.page_hero}>
        <h2>{pageTitle}</h2>
      </div>
    )
  } else {
    return (
      <div className="hero">
        <h1>Home</h1>
      </div>
    )
  }
}

Hero.propTypes = {
  pageTitle: PropTypes.string,
}

Hero.defaultProps = {
  pageTitle: ``,
}

export default Hero
