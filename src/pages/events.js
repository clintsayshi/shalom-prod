import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
//CSS
import "../styles/global.css"
//import styles from "../styles/Events.module.css"
import Hero from "../components/hero"

const Events = () => (
  <Layout>
    <SEO title="Events Shalom Christian Embassy" />
    <Hero pageTitle="Events" />

    <div className={StyleSheet.events}></div>
  </Layout>
)

export default Events
