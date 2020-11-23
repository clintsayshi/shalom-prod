import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

//CSS
import styles from "../styles/header.module.css"

const Header = ({ siteTitle }) => {
  // toggle navbar links
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  const MenuBtn = () => (
    <svg
      height="50"
      width="50"
      fill="none"
      stroke="#000"
      strokeWidth="1px"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 32h32M16 20h32M16 44h32" />
    </svg>
  )
  const CloseBtn = () => (
    <svg
      height="50"
      width="50"
      fill="none"
      stroke="#000"
      strokeWidth="1px"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 16l32 32M48 16L16 48" />
    </svg>
  )

  return (
    <header>
      <nav className={`container ${styles.navbar}`}>
        <h3 className={styles.navbar_logo}>
          <Link to="/">{siteTitle}</Link>
        </h3>

        <div onClick={toggle} className={styles.navbar_toggle}>
          {open ? <CloseBtn /> : <MenuBtn />}
        </div>

        <div
          className={`${styles.navbar_links}  ${
            open ? styles.navbar_links_open : styles.navbar_links_close
          }`}
        >
          <div className={styles.navbar_link}>
            <Link to="/about/">About</Link>
          </div>
          <div className={styles.navbar_link}>
            <Link to="/ministries/">Ministries</Link>
          </div>
          <div className={styles.navbar_link}>
            <Link to="/events/">Events</Link>
          </div>
          <div className={styles.navbar_link}>
            <Link className="btn btn_medium btn_gold" to="/first-time">
              Join us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
