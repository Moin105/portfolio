import React, { useState } from 'react'
import styles from '../../styles/Home.module.css'

function Osama() {
  const [newVal, setnewVal] = useState("")
  
  return (
    <> 
       <div className={styles.contain}>
          <h1 className={styles.h1}>I&apos;m <br></br>Osama Bin Shiraz.</h1>
          <p className={styles.p}>I am a web and mobile app developer that is enthusiastic about creating 
digital products that allow people to enjoy daily life rather than have to put up
with it. I&apos;ve worked in a variety of technical areas for more than 4 years.</p>
          <p className={styles.ps}>Working with my hands to make magic happen on the internet. View my Projects, Articles, Resume, Contact Me, or send me an email at <span className={styles.span}>osamashiraz60@gmail.com</span></p>
          <div className={styles.out}>
            <div className={styles.inner}>
            <h3 className={styles.h3}>
                Let&apos;s<br></br>chat
                </h3>
            </div>
          </div>
       </div> 
    </>
  )
}

export default Osama