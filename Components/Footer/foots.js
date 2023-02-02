import React from 'react'
import styles from '../../styles/Home.module.css'
import {FaLinkedinIn} from 'react-icons/fa'
import {ImGithub} from 'react-icons/im'
import {SiUpwork}from 'react-icons/si'

function Foots() {
  return (
    <>
       <div className={styles.foots}>
       <div className={styles.boxer}>
           <div className={styles.line}></div>
           <FaLinkedinIn/>
           <ImGithub/>
           <SiUpwork/>
       </div>
                

       </div> 
    </>
  )
}

export default Foots