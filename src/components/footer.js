import { Link } from "gatsby"
import React from "react"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

//CSS
import "../styles/global.css"

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer_social__icons">
        <a href="#">
          <FaFacebook />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
      </div>
      <div className="footer_quicklinks">
        <Link to="/about/">About</Link>

        <Link to="/ministries/">Ministries</Link>

        <Link to="/events/">Events</Link>

        <Link to="/first-time">Join us</Link>
      </div>
      <p className="footer_copyright__text">
        &copy; {new Date().getFullYear()} Shalom Christian Embassy
      </p>
    </div>
  </footer>
)

export default Footer
