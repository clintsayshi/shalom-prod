import { Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import BackgroundImage from "gatsby-background-image"

//CSS
import "../styles/global.css"
import styles from "../components/hero.module.css"

const Hero = ({ pageTitle }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "sittinchurch.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid

  if (pageTitle.length > 2) {
    return (
      <div className={styles.page_hero}>
        <h2>{pageTitle}</h2>
      </div>
    )
  } else {
    return (
      <BackgroundImage
        fluid={imageData}
        Tag="section"
        className={`${styles.hero}`}
      >
        <div className={`${styles.innerHero} container`}>
          <h1>Let go and let God</h1>
          <Link className="btn btn_medium btn_gold">Join us this sunday</Link>
        </div>
      </BackgroundImage>
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
