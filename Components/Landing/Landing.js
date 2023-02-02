import React from 'react'
import Banner from './Banner'
import Osama from './Osama'
import styles from '../../styles/Home.module.css'

function Landing() {
  return (
    <div className={styles.landing}>
        <Banner/>
        <Osama/>
    </div>
  )
}

export default Landing