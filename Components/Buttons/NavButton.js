import React from 'react'
import styles from '../../styles/Home.module.css'


function NavButton(props) {

  return (
    <button className={styles.nav}>
        {props.name}
    </button>
  )
}

export default NavButton