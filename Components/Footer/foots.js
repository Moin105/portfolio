import React from 'react'
import styles from '../../styles/Home.module.css'
import {FaLinkedinIn} from 'react-icons/fa'
import {ImGithub} from 'react-icons/im'
import {SiUpwork}from 'react-icons/si'
import Link from 'next/link'

function Foots() {
  return (
    <>
       <div className={styles.foots}>
       <div className={styles.boxer}>
           <div className={styles.line}></div>
           <Link href="https://www.linkedin.com/in/osama-shiraz-822478121/"><FaLinkedinIn/></Link>
           <Link href="https://github.com/osama294"><ImGithub/></Link>
           <Link href="https://www.upwork.com/freelancers/~01e22735ea24e245ab"><SiUpwork/></Link>
       </div>
                

       </div> 
    </>
  )
}

export default Foots