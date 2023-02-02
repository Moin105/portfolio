import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Home.module.css'
import p1 from '../../public/p1.png'
import NextJsCarousel from './Carousel'
function Project() {
  return (
    <>
        <div className={styles.project}>
             <div className={styles.first}>
                  <h2 className={styles.h2}>
                     <span className={styles.span}>03.</span>
                  Some Things I&apos;ve Built</h2>
                  <div className={styles.line}>
             </div>
             </div>
             <div className={styles.carou}>
              <NextJsCarousel/>
             </div>
             
             {/* <div className={styles.boxone}>  
             <div className={styles.right}>
                <Image
                   src={p1}
                   alt="banner"
                   fill   
                />
              </div>
              <div className={styles.left}>
                <p className={styles.fp}>Fteatured Project</p>
                <h2 className={styles.h2}>Randox | Certifly</h2>
                <div className={styles.lightblue}>
                    <p className={styles.description}>Randox is committed to enhancing healthcare through cutting-edge diagnostic technology. We worked on the Randox iOS app, Web app, customer support, IT support, and web portal which allowed us to create certificates for both national and international passengers.</p>
                    <p className={styles.lang}>CSS HTML Firebase PHP LARAVEL</p>
                </div>
                <div className={styles.linkrow}>
                    <p className={styles.link}>http://covid.randox.com/certifly-app-download/</p>
                </div>
              </div>
            
             </div>
             <div className={styles.boxtwo}>  
             <div className={styles.right}>
                <Image
                   src={p1}
                   alt="banner"
                   fill   
                />
              </div>
              <div className={styles.left}>
                <p className={styles.fp}>Fteatured Project</p>
                <h2 className={styles.h2}>Randox | Certifly</h2>
                <div className={styles.lightblue}>
                    <p className={styles.description}>Randox is committed to enhancing healthcare through cutting-edge diagnostic technology. We worked on the Randox iOS app, Web app, customer support, IT support, and web portal which allowed us to create certificates for both national and international passengers.</p>
                    <p className={styles.lang}>CSS HTML Firebase PHP LARAVEL</p>
                </div>
                <div className={styles.linkrow}>
                    <p className={styles.link}>http://covid.randox.com/certifly-app-download/</p>
                </div>
              </div>
            
             </div> */}
        </div>
    </>
  )
}

export default Project