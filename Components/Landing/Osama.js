import React, { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'
import {FaLinkedinIn} from 'react-icons/fa'
import {ImGithub} from 'react-icons/im'
import {SiUpwork}from 'react-icons/si'
import Link from 'next/link'
import useWindowSize from '../Hooks/useWindow'
function Osama() {
  const [newVal, setnewVal] = useState(true)
  
  const size = useWindowSize()
  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop > size.height ? true : false;
   if(stickyClass == true){
    setnewVal(false);
   }else{
    setnewVal(true)
   }
    
    // console.log(stickyClass);
  };
  useEffect(() => {
    if (typeof window === 'undefined') return;
    console.log(window.scrollY)
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
    //    if( size.height <  window.scrollBy()){
    //      console.log(window.scrollBy())
    //    }else{
    //     console.log(window.scrollBy)
    //    }
    //  if(size.height > 500){      
    //   setnewVal(false)
    //  }else{
    //   setnewVal(true)
    //  }
    window.addEventListener("scroll", isSticky);

     console.log(size.height)
  }, [size.scrollY])
  
  return (
    <> 
       <div className={styles.contain}>
        {/* <Pdf/> */}
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
         <Link href='/Resume'> <div className={styles.navbtn}>Check my Resume</div></Link>
       {newVal &&   <div className={styles.footes}>
       <div className={styles.boxer}>
           <div className={styles.line}></div>
         
           <Link href="https://www.linkedin.com/in/osama-shiraz-822478121/"><FaLinkedinIn/></Link>
           <Link href="https://github.com/osama294"><ImGithub/></Link>
           <Link href="https://www.upwork.com/freelancers/~01e22735ea24e245ab"><SiUpwork/></Link>
       </div>
       </div> }
       </div>  
      
    </>
  )
}

export default Osama