import React from 'react'
import Ecard from './ecard'
import code from  '../../public/code.png'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
function Experties() {
  return (
    <div className={styles.experties}>
        <h2 className={styles.h2s}><span className={styles.span}>01.</span>My Expertise</h2>
    <Ecard/>
    <figure className={styles.code}>
           <Image
            src={code}
            alt="banner"
            fill           
            />
        </figure>
    </div>
  )
}

export default Experties