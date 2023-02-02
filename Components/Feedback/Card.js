import React from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import star from '../../public/star.png'
import upwork from '../../public/upwork.png'


function Card(props) {
  return (
    <>
        <div className={styles.card}>
              <div className={styles.cardrow}>
              <div className={styles.recto}>
                    <p className={styles.name}>{props.name}</p>
                   <figure className={styles.star}>
                   <Image
                        src={star}
                        alt="banner"
                        fill   
                     />
                   </figure>
              </div>
              <figure className={styles.upwork}>
                   <Image
                        src={upwork}
                        alt="banner"
                        fill   
                     />
                   </figure>
              </div>
              <p className={styles.descrip}>
                 {props.remark}
              </p>
        </div>
    </>
  )
}

export default Card