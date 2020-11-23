import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
//CSS
import "../styles/global.css"
import styles from "../styles/about.module.css"
import Hero from "../components/hero"

const About = ({ data }) => (
  <Layout>
    <SEO title="About Shalom Christian Embassy" />
    <Hero pageTitle="About" />

    <h4 className="container section_heading">Our Leadership</h4>

    <section className={`${styles.section_lead} container`}>
      <div className={styles.section_lead__overlay}></div>

      <div className={styles.section_lead__content}>
        <h4>Apostle Sithole MZ</h4>
        <small>Senior pastor</small>
        <p>apostle12352@gmail.com</p>
        <p>0793901293</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
          pariatur sed culpa quis, error quos nulla corrupti aliquid eius quasi
          exercitationem fugit, dolorum numquam non ipsa odit nesciunt fuga,
          earum id saepe unde perferendis nemo cupiditate itaque! Maiores,
          deleniti vel!
        </p>
      </div>

      <div className={styles.section_lead__cover}>
        <Img
          className={styles.section_lead__coverimg}
          fluid={data.aboutimg.childImageSharp.fluid}
          alt="A corgi smiling happily"
        />
      </div>
    </section>

    <div className="divider"></div>

    <section className={`${styles.section} container`}>
      <div className={styles.section_smlead}>
        <div className={styles.section_smlead__cover}>
          <Img
            className={styles.section_smlead__coverimg}
            fluid={data.aboutimg.childImageSharp.fluid}
            alt="A corgi smiling happily"
          />
        </div>
        <div className={styles.section_smlead__content}>
          <h4>Apostle Sithole MZ</h4>
          <small>Senior pastor</small>
          <p>apostle12352@gmail.com</p>
          <p>0793901293</p>
        </div>
      </div>
      <div className={styles.section_smlead}>
        <div className={styles.section_smlead__cover}>
          <Img
            className={styles.section_smlead__coverimg}
            fluid={data.aboutimg.childImageSharp.fluid}
            alt="A corgi smiling happily"
          />
        </div>
        <div className={styles.section_smlead__content}>
          <h4>Apostle Sithole MZ</h4>
          <small>Senior pastor</small>
          <p>apostle12352@gmail.com</p>
          <p>0793901293</p>
        </div>
      </div>
      <div className={styles.section_smlead}>
        <div className={styles.section_smlead__cover}>
          <Img
            className={styles.section_smlead__coverimg}
            fluid={data.aboutimg.childImageSharp.fluid}
            alt="A corgi smiling happily"
          />
        </div>
        <div className={styles.section_smlead__content}>
          <h4>Apostle Sithole MZ</h4>
          <small>Senior pastor</small>
          <p>apostle12352@gmail.com</p>
          <p>0793901293</p>
        </div>
      </div>
    </section>

    <div className="divider"></div>

    <h4 className="container section_heading">Our Mission, Values...</h4>
    <section className={`${styles.section_mission} container`}>
      <h5 className={styles.section_mission__title}>Our Mission</h5>
      <p className={styles.section_mission__content}>
        To ensure that the peace of our Lord Jesus Christ is received by many
        (as many as received they Him) through the preaching of the message of
        the Cross across all Nations, through deeds of mercy, church planting,
        home cells, crusades, discipleship, healing of the sick and impartation
        of the Gifts of the Holy Spirit through which all are equipped for the
        readiness of the harvest and spreading of the good news of the Kingdom
        of God.
      </p>
    </section>
    <div className="divider"></div>
    <section className={`${styles.section_vision} container`}>
      <h5 className={styles.section_vision__title}>Vision statement</h5>
      <div className={styles.section_vision__content}>
        <p>
          To receive and maintain the peace of the Successor (Jesus Christ) and
          preach the good news of the Kingdom of God to the whole world.
        </p>
        <p className={styles.section_vision__contentqt}>
          " Peace I leave with you, my peace I give unto you: not as the world
          giveth, give I unto you. Let not your heart be troubled, neither let
          it be afraid. "
        </p>
        <small>John 14:27</small>
      </div>
    </section>

    <div className="divider"></div>

    <section className={`${styles.section_values} container`}>
      <h5 className={styles.section_values__title}>Our Values</h5>
      <div className={styles.section_values__content}>
        <div className={styles.section_values__item}>
          <div className={styles.section_values__itemoverlay}></div>
          <p>Holiness</p>
        </div>
        <div className={styles.section_values__item}>
          <div className={styles.section_values__itemoverlay}></div>
          <p>Respect</p>
        </div>
        <div className={styles.section_values__item}>
          <div className={styles.section_values__itemoverlay}></div>
          <p>Peace makers</p>
        </div>
        <div className={styles.section_values__item}>
          <div className={styles.section_values__itemoverlay}></div>
          <p>Honesty</p>
        </div>
        <div className={styles.section_values__item}>
          <div className={styles.section_values__itemoverlay}></div>
          <p>Inspiration</p>
        </div>
        <div className={styles.section_values__item}>
          <div className={styles.section_values__itemoverlay}></div>
          <p>Integrity</p>
        </div>
        <div className={styles.section_values__item}>
          <div className={styles.section_values__itemoverlay}></div>
          <p>Excellence</p>
        </div>
        <div className={styles.section_values__item}>
          <div className={styles.section_values__itemoverlay}></div>
          <p>Humility</p>
        </div>
        <div className={styles.section_values__item}>
          <div className={styles.section_values__itemoverlay}></div>
          <p>Loyalty</p>
        </div>
      </div>
    </section>

    <div className="divider"></div>

    <section className={`${styles.section_faith} container`}>
      <div className={styles.section_overlay}></div>
      <h5 className={styles.section_faith__title}>Our Statement of Faith</h5>
      <p className={styles.section_faith__caption}>
        The church (SCE) as a Body of Jesus Christ believes:
      </p>
      <ul className={styles.section_faith__content}>
        <li className={styles.section_faith__item}>
          <p>
            That the scriptures, both Old and New Testament are fully inspired
            by the Holy Spirit are the final authority for the church.
          </p>
        </li>
        <li className={styles.section_faith__item}>
          <p>
            That God the Father is the creator and maintainer of all things3.
            That the scriptures, both Old and New Testament are fully inspired
            by the Holy Spirit
          </p>
        </li>
      </ul>
    </section>

    <div className="divider"></div>
  </Layout>
)

export default About

/* export const query = graphql`
  query {
    imageOne: file(relativePath: { eq: "gatsby-icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
        }
      }
    }
  }
` */
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
