import React from 'react'
import styles from '../../styles/Home.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
          <div className={styles.containor}>
               <h2 className={styles.h2}>Don’t be a stranger!</h2>
               <p className={styles.p}>Available for select freelance opportunities<br></br>
Have an exciting project you need help with? Send me an email or<br></br> contact me via instant message!
</p>
   <div className={styles.out}>
            <div className={styles.inner}>
                <h3 className={styles.h3}>
                Let’s<br></br>chat
                </h3>
            </div>
          </div>
          </div>
    </div>
  )
}

export default Footer