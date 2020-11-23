import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
//CSS
import "../styles/global.css"
//import styles from "../styles/Events.module.css"
import Hero from "../components/hero"

const Events = () => (
  <Layout>
    <SEO title="Events Shalom Christian Embassy" />
    <Hero pageTitle="Events" />
  </Layout>
)

export default Events
