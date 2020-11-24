import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
//CSS
import "../styles/global.css"
import styles from "../styles/ministries.module.css"
import Hero from "../components/hero"
import { Ministries as m } from "../data/about-data"

const Ministries = () => (
  <Layout>
    <SEO title="Ministries Shalom Christian Embassy" />
    <Hero pageTitle="Church Ministries" />

    <p className={`${styles.paragraph} container`}>
      We hope to provide enough information to help prepare and know what to
      expect when you do decide to come church with us.
    </p>

    <div className={`${styles.section_ministries}`}>
      {m.map((item, index) => (
        <section key={index} className={`${styles.section_ministry} container`}>
          <h5 className={styles.section_ministry__title}>{item.title}</h5>
          <p>{item.desc}</p>
        </section>
      ))}
    </div>

    <div className="divider"></div>
  </Layout>
)

export default Ministries
