import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
//CSS
import "../styles/global.css"
import styles from "../styles/events.module.css"
import Hero from "../components/hero"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const Events = ({ data }) => (
  <Layout>
    <SEO title="Events Shalom Christian Embassy" />
    <Hero pageTitle="Events" />

    <div className={`${styles.events} container`}>
      <div className={styles.event}>
        <div className={styles.event_cover}>
          <Img
            className={styles.event_cover__img}
            fluid={data.aboutimg.childImageSharp.fluid}
            alt="event cover"
          />
        </div>

        <div className={styles.event_details}>
          <h5 className={styles.event_title}>
            Leadership Conference for people who are shy and cute
          </h5>
          <div className={styles.event_datetime}>
            Thursday, November 01, 2020
          </div>
          <small className={styles.event_location}>
            at Shalom Christian Embassy Hall
          </small>
          <p className={styles.event_desc}>
            Ladies of Mosaic, come enjoy a cozy time around a campfire. Ladies
            of Mosaic, come enjoy a cozy time around a campfire
          </p>
        </div>
      </div>
      <div className={styles.event}>
        <Img
          className={styles.event_cover}
          fluid={data.aboutimg.childImageSharp.fluid}
          alt="event cover"
        />

        <div className={styles.event_details}>
          <h5 className={styles.event_title}>
            Leadership Conference for people who are shy and cute
          </h5>
          <div className={styles.event_datetime}>
            Thursday, November 01, 2020
          </div>
          <div className={styles.event_location}>
            at Shalom Christian Embassy Hall
          </div>
          <p className={styles.event_desc}>
            Ladies of Mosaic, come enjoy a cozy time around a campfire. Ladies
            of Mosaic, come enjoy a cozy time around a campfire
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default Events

export const query = graphql`
  query {
    aboutimg: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    abouticon: file(relativePath: { eq: "gatsby-icon.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
