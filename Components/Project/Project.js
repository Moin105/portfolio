// import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Home.module.css'
import p1 from '../../public/p1.png'
import p2 from '../../public/p2.png'
import p3 from '../../public/p3.png'
import p4 from '../../public/p4.png'
import p5 from '../../public/p5.png'
import p6 from '../../public/p6.png'
import p7 from '../../public/p7.png'
import p8 from '../../public/p8.png'
import NextJsCarousel from './Carousel'
function Project() {
  const  cops = [
    { "key":"1","image":p1,
      "name": "Randox | Certifly",
      "description": "Randox is committed to enhancing healthcare through cutting-edge diagnostic technology. We worked on the Randox iOS app, Web app, customer support, IT support, and web portal which allowed us to create certificates for both national and international passengers.",
      "lang": "CSS HTML Firebase PHP LARAVEL",
      "link": "http://covid.randox.com/certifly-app-download/"
    },{"key":"2","image":p2,
      "name": "ATS-Ticketing",
      "description": "ATS is a Fast, Handy, and Contactless ticket validation & check-in mobile application. ATS is designed especially to resolve the challenge of vehicle ticket scanning with instances of duplicate tickets. ATS's real-time QR Code scanning helps detect fake tickets & speeds up the validation process",
      "lang": "CSS HTML Firebase PHP LARAVEL",
      "link":""
    },{"key":"3","image":p3,
      "name": "Pet Friendly",
      "description": "Always stay in touch with your pet’s favorite places and discover new places within a few seconds! The goal was to design a mobile application for pet owners so that they can find pet-friendly places near them. Pet owners can now easily find and visit places and can add reviews and images of those places. ",
      "lang": "CSS HTML Firebase PHP LARAVEL",
      "link":""
    },{"key":"4","image":p4,
      "name": "Writer’s Lock",
      "description": "Writer's Lock is notes writing app. You can use this app to jot down your ideas with ease, make notes and stay focused. The app is customized according to the user's needs and is designed to meet the needs of millions of writers across the globe. Wherever you need to be productive, the Notes app is always nearby.",
      "lang": "CSS HTML Firebase PHP LARAVEL",
      "link":""
    },{"key":"5","image":p5,
      "name": "WildCatFlashMath",
      "description": "Wildcat Flash Math is a web application designed to quiz students on various Math topics. This app is designed for Valdosta School Systems. Current students must use their account login to access the mobile application. The various math topics include Telling Time, Counting Money, Fractions, Addition, etc",
      "lang": "CSS HTML Firebase PHP LARAVEL",
      "link": "http://wildcatflashmath.com/login.php"
    },{"key":"6","image":p6,
      "name": "World Enterprises",
      "description": "World Enterprises is providing construction estimating services throughout the US. Their estimators have extensive expertise in estimating for subcontractors, general contractors, estate owners, developers, etc. ",
      "lang": "CSS HTML Firebase PHP LARAVEL",
      "link": "http://worldenterprises.us/"
    },{"key":"7","image":p7,
      "name": "VoRides",
      "description": "Vorides is a carpooling platform that allows millions of people to get to their destinations safely. Vo rides is a carpooling app designed for the sole purpose of connecting Drivers and Passengers who are going in the same direction, to share both the trip and the associated costs of travel.",
      "lang": "CSS HTML Firebase PHP LARAVEL",
      "link": "http://vorides.com/"
    },{"key":"8","image":p8,
      "name": "eCareDocta",
      "description": "eCareDocta has come to improve access to healthcare to ensure the African population gets the best possible healthcare from their homes and gets referred to the hospitals when needed. eCareDocta strives to solve the problems of long waiting times at health facilities, by providing automated solutions.",
      "lang": "CSS HTML Firebase PHP LARAVEL",
      "link": "http://ecareserve.com"
    }
    
    
  ]
    const cos = [    
      {"key":"6","image":p6,
      "name": "World Enterprises",
      "description": "World Enterprises is providing construction estimating services throughout the US. Their estimators have extensive expertise in estimating for subcontractors, general contractors, estate owners, developers, etc. ",
      "lang": "CSS HTML Firebase PHP LARAVEL",
      "link": "http://worldenterprises.us/"
    },{"key":"7","image":p7,
      "name": "VoRides",
      "description": "Vorides is a carpooling platform that allows millions of people to get to their destinations safely. Vo rides is a carpooling app designed for the sole purpose of connecting Drivers and Passengers who are going in the same direction, to share both the trip and the associated costs of travel.",
      "lang": "CSS HTML Firebase PHP LARAVEL",
      "link": "http://vorides.com/"
    },{"key":"8","image":p8,
      "name": "eCareDocta",
      "description": "eCareDocta has come to improve access to healthcare to ensure the African population gets the best possible healthcare from their homes and gets referred to the hospitals when needed. eCareDocta strives to solve the problems of long waiting times at health facilities, by providing automated solutions.",
      "lang": "CSS HTML Firebase PHP LARAVEL",
      "link": "http://ecareserve.com"
    },
    { "key":"1","image":p1,
    "name": "Randox | Certifly",
    "description": "Randox is committed to enhancing healthcare through cutting-edge diagnostic technology. We worked on the Randox iOS app, Web app, customer support, IT support, and web portal which allowed us to create certificates for both national and international passengers.",
    "lang": "CSS HTML Firebase PHP LARAVEL",
    "link": "http://covid.randox.com/certifly-app-download/"
  },{"key":"2","image":p2,
    "name": "ATS-Ticketing",
    "description": "ATS is a Fast, Handy, and Contactless ticket validation & check-in mobile application. ATS is designed especially to resolve the challenge of vehicle ticket scanning with instances of duplicate tickets. ATS's real-time QR Code scanning helps detect fake tickets & speeds up the validation process",
    "lang": "CSS HTML Firebase PHP LARAVEL",
    "link":""
  },{"key":"3","image":p3,
    "name": "Pet Friendly",
    "description": "Always stay in touch with your pet’s favorite places and discover new places within a few seconds! The goal was to design a mobile application for pet owners so that they can find pet-friendly places near them. Pet owners can now easily find and visit places and can add reviews and images of those places. ",
    "lang": "CSS HTML Firebase PHP LARAVEL",
    "link":""
  },{"key":"4","image":p4,
    "name": "Writer’s Lock",
    "description": "Writer's Lock is notes writing app. You can use this app to jot down your ideas with ease, make notes and stay focused. The app is customized according to the user's needs and is designed to meet the needs of millions of writers across the globe. Wherever you need to be productive, the Notes app is always nearby.",
    "lang": "CSS HTML Firebase PHP LARAVEL",
    "link":""
  },{"key":"5","image":p5,
    "name": "WildCatFlashMath",
    "description": "Wildcat Flash Math is a web application designed to quiz students on various Math topics. This app is designed for Valdosta School Systems. Current students must use their account login to access the mobile application. The various math topics include Telling Time, Counting Money, Fractions, Addition, etc",
    "lang": "CSS HTML Firebase PHP LARAVEL",
    "link": "http://wildcatflashmath.com/login.php"} 
  
     
   
     
    
   
   
      ]
  return (
    <>
        <div className={styles.project} id="portfolio">
             <div className={styles.first}>
                  <h2 className={styles.h2}>
                     <span className={styles.span}>03.</span>
                  Some Things I&apos;ve Built</h2>
                  <div className={styles.line}>
             </div>
             </div>
             <div className={styles.carou}>
              <NextJsCarousel data={cops} reverse={false}/>
              <NextJsCarousel data={cos} reverse={true}/>
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