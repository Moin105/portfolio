import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Home.module.css'
import NavButton from '../Buttons/NavButton'
import obs from '../../public/obs.png'
function Header() {
  return (
    <div className={styles.header}>
         <figure className={styles.logo}>
         <Image
            src={obs}
            alt="ecare"
            layout="fill"
            objectFit="contain"
         />
         </figure>

         <ul>
         <NavButton name="about" />
         <NavButton name="experience" />
         <NavButton name="portfolio" />
         <NavButton name="contact" />
         <NavButton name="resume"  />

         </ul>
    </div>
  )
}

export default Header