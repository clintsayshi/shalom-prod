import React, { useState } from "react"
import { Link } from "gatsby"
import { CgMenuRightAlt, CgMenuRight } from "react-icons/cg"

import "../styles/global.css"
import styles from "../styles/dropdown.module.css"
import { Ministries } from "../data/about-data"

const DropDown = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* <div className={`${styles.dropdown} container`}>
        <div className={styles.dropdown_links}>
          {open ? (
            <div>
              {Ministries.map((item, index) => (
                <div key={index} class={styles.dropdown_link}>
                  <Link class="btn btn_black btn_medium">{item.title}</Link>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.line}></div>
          )}
        </div>

          <div onClick={() => setOpen(!open)} className={styles.dropdown_toggle}>
          {!open ? <CgMenuRightAlt /> : <CgMenuRight />}
        </div>  
      </div> */}

      <div className={`container`}>
        {Ministries.map((item, index) => (
          <section
            key={index}
            className={`${styles.section_ministry} container`}
          >
            <h5 className={styles.section_ministry__title}>{item.title}</h5>
            <p>{item.desc}</p>
          </section>
        ))}
      </div>

      <div className="divider"></div>
    </>
  )
}

export default DropDown
