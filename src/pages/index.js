import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
//CSS
import "../styles/global.css"
import styles from "../styles/index.module.css"
import Hero from "../components/hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />

    <section
      className={`${styles.section} ${styles.service_times__summary} container`}
    >
      <div
        className={`${styles.section_title}  ${styles.service_times_summary__title}`}
      >
        <h4 className={`${styles.section_title__text}`}>
          Main
          <br />
          Sunday Service
        </h4>
      </div>
      <div
        className={`${styles.section_content} ${styles.service_times_summary__content}`}
      >
        <p className={styles.section_big__text}>10h30 – 13h00</p>
        <Link className="universal_link" to="/first-time">
          View all service times &gt;
        </Link>
      </div>
    </section>
    <div className="divider"></div>
    <section
      className={`${styles.section} ${styles.service_times__summary} container`}
    >
      <div
        className={`${styles.section_content} ${styles.events_summary__content}`}
      >
        <img
          className={styles.events_summary__thumbnail}
          src="src\images\gatsby-icon.png"
          alt=""
        />

        <div className={styles.events_summary__actions}>
          <h5>The Coming of Jesus Conference</h5>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui minus
            optio natus laborum sapiente consequuntur beatae illum magnam sint
            quisquam.
          </p>
          <a href="#" className="btn btn_medium btn_black" href="#">
            Register for this event
          </a>
          <Link className="universal_link" to="/events">
            View all events &gt;
          </Link>
        </div>
      </div>
    </section>
    <div className="divider"></div>
    <section
      className={`${styles.section} ${styles.ministries_summary} container`}
    >
      <div
        className={`${styles.section_title}  ${styles.ministries_summary__title}`}
      >
        <h4 className={`${styles.section_title__text}`}>
          Church
          <br />
          Ministries
        </h4>
      </div>

      <div
        className={`${styles.section_content} ${styles.ministries_summary__content}`}
      >
        <div className={styles.ministries_summary__item}>
          <h5>Name fo fof</h5>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur,
            consequatur. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Veritatis, in.
          </p>
        </div>

        <div className={styles.ministries_summary__item}>
          <h5>Name fo fof</h5>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur,
            consequatur. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Veritatis, in.
          </p>
        </div>
      </div>

      <Link className="universal_link" to="/ministries/">
        View all ministries &gt;
      </Link>
    </section>
    <div className="divider"></div>
  </Layout>
)

export default IndexPage

/* 



 <section className={`${styles.section} ${styles.events_summary} container`}>
      <div className={`  ${styles.events_summary__title}`}>
        <h4 className={`${styles.section_title__text}`}>Upcoming events</h4>
      </div>
      <div
        className={`${styles.section_content} ${styles.events_summary__content}`}
      >
        <img
          className={styles.events_summary__thumbnail}
          src="src\images\gatsby-icon.png"
          alt=""
        />
        <div className={styles.events_summary__actions}>
          <h5>The Coming of Jesus Conference</h5>
          <a className="btn btn_medium btn_black" href="#">
            Register for this event
          </a>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui minus
            optio natus laborum sapiente consequuntur beatae illum magnam sint
            quisquam.
          </p>
          <Link className="universal_link" to="/first-time">
            View all service times &gt;
          </Link>
        </div>
      </div>
    </section>
*/
