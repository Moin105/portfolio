import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Home.module.css'
import NavButton from '../Buttons/NavButton'
import Link from 'next/link'
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
         <Link href="/#about"><NavButton name="about" /></Link>
         <Link href="/#experience"><NavButton name="experience" /></Link> 
         <Link href="/#portfolio"><NavButton name="portfolio" /></Link>
         <Link href="/#contact"><NavButton name="contact" /></Link>
         <Link href="/Resume"><NavButton name="resume"   /></Link>

         </ul>
    </div>
  )
}

export default Header