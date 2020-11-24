import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
//CSS
import "../styles/global.css"
import styles from "../styles/first-time.module.css"
import Hero from "../components/hero"

const FirstTime = () => (
  <Layout>
    <SEO title="First Time Shalom Christian Embassy" />
    <Hero pageTitle="Your First Time here?" />

    <p className={`${styles.paragraph} container`}>
      We hope to provide enough information to help prepare and know what to
      expect when you do decide to come church with us.
    </p>

    <div className={styles.section_heading}>
      <h4 className={styles.section_heading__text}>Sunday Services</h4>
    </div>

    <section className={`${styles.section_times} container`}>
      <div className={styles.section_times__item}>
        <h6 className={styles.section_item__title}>Sunday Main Service</h6>
        <p>10h30 – 13h00</p>
      </div>
      <div className={styles.section_times__item}>
        <h6 className={styles.section_item__title}>Sunday Schools</h6>
        <p>Elders school: 09h00 -10h00</p>
        <p>Children ministry: 09h00 – 10h00</p>
        <p>Pastors Class 14h00 – 16h00</p>
      </div>
    </section>

    <div className="divider"></div>

    <div className={styles.section_heading}>
      <h4 className={styles.section_heading__text}>Weekdays Services</h4>
    </div>

    <section className={`${styles.section_times} container`}>
      <div className={styles.section_times__itemweek}>
        <h6 className={styles.section_item__title}>
          Mondays: Fasting and Prayer days
        </h6>
        <p>17h30 – 19h00</p>

        <h6 className={styles.section_item__title}>
          Tuesdays: Man Forum Prayer Meeting
        </h6>
        <p>17h30 – 19h00</p>

        <h6 className={styles.section_item__title}>
          Wednesdays: Miracle services
        </h6>
        <p>09h00 -10h00</p>

        <h6 className={styles.section_item__title}>
          Saturdays: Youth Ministry and Praise &amp; Worship Team Practice
        </h6>
        <p>17h30 – 19h00</p>

        <h6 className={styles.section_item__title}>
          Fridays: Fire Night (He purifies by fire)
        </h6>
        <p>09h00 -10h00</p>

        <h6 className={styles.section_item__title}>
          Saturdays: Youth Ministry and Praise &amp; Worship Team Practice
        </h6>
        <p>09h00 -10h00</p>
      </div>
    </section>

    <div className="divider"></div>

    <div className={styles.section_heading}>
      <h4 className={styles.section_heading__text}>Our Location</h4>
    </div>

    <section className={`${styles.section_location} container`}>
      <div className={styles.section_location__item}>
        <h6 className={styles.section_item__title}>Sunday Main Service</h6>
        <p>
          HEAD QUARTERS: MATSULU B <br />
          P O BOX 7430,
          <br />
          1203
        </p>
      </div>
    </section>

    <div className="divider"></div>
  </Layout>
)

export default FirstTime
