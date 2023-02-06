import React, { Component, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import Testimonials from "./testimonials";
import Image from "next/image";
import styles from '../../styles/Home.module.css'
// import next from "../public/next.png";
// import prev from "../public/prev.png";
// import p1 from '../../public/p1.png'
// import p2 from '../../public/p2.png'

// import p3 from '../../public/p3.png'
// import p4 from '../../public/p4.png'

// import p5 from '../../public/p5.png'

// import p6 from '../../public/p6.png'

// import p7 from '../../public/p7.png'

// import p8 from '../../public/p8.png'

// import './overrides.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class NextJsCarousel extends Component {


  render() {
  //  const  data = [
  //   { "key":"1","image":p1,
  //     "name": "Randox | Certifly",
  //     "description": "Randox is committed to enhancing healthcare through cutting-edge diagnostic technology. We worked on the Randox iOS app, Web app, customer support, IT support, and web portal which allowed us to create certificates for both national and international passengers.",
  //     "lang": "CSS HTML Firebase PHP LARAVEL",
  //     "link": "http://covid.randox.com/certifly-app-download/"
  //   },{"key":"2","image":p2,
  //     "name": "ATS-Ticketing",
  //     "description": "ATS is a Fast, Handy, and Contactless ticket validation & check-in mobile application. ATS is designed especially to resolve the challenge of vehicle ticket scanning with instances of duplicate tickets. ATS's real-time QR Code scanning helps detect fake tickets & speeds up the validation process",
  //     "lang": "CSS HTML Firebase PHP LARAVEL",
  //     "link":""
  //   },{"key":"3","image":p3,
  //     "name": "Pet Friendly",
  //     "description": "Always stay in touch with your pet’s favorite places and discover new places within a few seconds! The goal was to design a mobile application for pet owners so that they can find pet-friendly places near them. Pet owners can now easily find and visit places and can add reviews and images of those places. ",
  //     "lang": "CSS HTML Firebase PHP LARAVEL",
  //     "link":""
  //   },{"key":"4","image":p4,
  //     "name": "Writer’s Lock",
  //     "description": "Writer's Lock is notes writing app. You can use this app to jot down your ideas with ease, make notes and stay focused. The app is customized according to the user's needs and is designed to meet the needs of millions of writers across the globe. Wherever you need to be productive, the Notes app is always nearby.",
  //     "lang": "CSS HTML Firebase PHP LARAVEL",
  //     "link":""
  //   },{"key":"5","image":p5,
  //     "name": "WildCatFlashMath",
  //     "description": "Wildcat Flash Math is a web application designed to quiz students on various Math topics. This app is designed for Valdosta School Systems. Current students must use their account login to access the mobile application. The various math topics include Telling Time, Counting Money, Fractions, Addition, etc",
  //     "lang": "CSS HTML Firebase PHP LARAVEL",
  //     "link": "http://wildcatflashmath.com/login.php"
  //   },{"key":"6","image":p6,
  //     "name": "World Enterprises",
  //     "description": "World Enterprises is providing construction estimating services throughout the US. Their estimators have extensive expertise in estimating for subcontractors, general contractors, estate owners, developers, etc. ",
  //     "lang": "CSS HTML Firebase PHP LARAVEL",
  //     "link": "http://worldenterprises.us/"
  //   },{"key":"7","image":p7,
  //     "name": "VoRides",
  //     "description": "Vorides is a carpooling platform that allows millions of people to get to their destinations safely. Vo rides is a carpooling app designed for the sole purpose of connecting Drivers and Passengers who are going in the same direction, to share both the trip and the associated costs of travel.",
  //     "lang": "CSS HTML Firebase PHP LARAVEL",
  //     "link": "http://vorides.com/"
  //   },{"key":"8","image":p8,
  //     "name": "eCareDocta",
  //     "description": "eCareDocta has come to improve access to healthcare to ensure the African population gets the best possible healthcare from their homes and gets referred to the hospitals when needed. eCareDocta strives to solve the problems of long waiting times at health facilities, by providing automated solutions.",
  //     "lang": "CSS HTML Firebase PHP LARAVEL",
  //     "link": "http://ecareserve.com"
  //   }
    
    
  // ]
 console.log("sdad",this.props.data)
    // console.log("data", data);

    const arrowStyles = {
      position: "absolute",
      top: "0",
      bottom: "auto",
      padding: ".4em",
      zIndex: 2,
      width: "55px",
      height: "100%",
    };
    return (
        <Carousel
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="arrow"
                style={{
                  ...arrowStyles,
                  left: "0",
                  backgroundColor: "transparent",
                  border: "none",
                  margin: "auto 74px ",
                }}
              >
                {" "}
                {/* <Image src={prev} alt="quote" width={52} height={52} smooth /> */}
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                className="arrow"
                onClick={onClickHandler}
                title={label}
                style={{
                  ...arrowStyles,
                  right: 0,
                  background: "transparent",
                  border: "none",
                  margin: "auto 74px ",
                }}
              >
                {" "}
                {/* <Image src={next} alt="quote" width={52} height={52} /> */}
              </button>
            )
          }
          showStatus={false}
          showThumbs={false}
          autoPlay={true}
          interval={3000}
          // autoPlay={true}
          infiniteLoop={true}
          style={{ ...arrowStyles, left: 15 }}
        >
        
          {this.props.reverse !== true ? this.props?.data?.map((child, index) => {
          
            return (
                <div className={styles.projet} key={index}>
                  
                <div className={styles.boxone}>  
             <div className={styles.right}>
                <Image
                   src={child.image}
                   alt="banner"
                   fill   
                />
              </div>
              <div className={styles.left}>
                <p className={styles.fp}>Featured Project</p>
                <h2 className={styles.h2}>{child.name}</h2>
                <div className={styles.lightblue}>
                    <p className={styles.description}>{child.description}</p>
                    <p className={styles.lang}>{child.lang}</p>
                </div>
                <div className={styles.linkrow}>
                    <p className={styles.link}>{child.link}</p>
                </div>
              </div>
            
             </div>
             </div>
            );
          }):  this.props?.data?.map((child, index) => {
          
            return (
                <div className={styles.projet} key={index}>
                  
                  <div className={styles.boxtwo}>  
             <div className={styles.right}>
                {/* <Image
                   src={p1}
                   alt="banner"
                   fill   
                /> */}
              </div>
              <div className={styles.left}>
                <p className={styles.fp}>Featured Project</p>
                <h2 className={styles.h2}>{child.name}</h2>
                <div className={styles.lightblue}>
                    <p className={styles.description}>{child.description}</p>
                    <p className={styles.lang}>{child.lang}</p>
                </div>
                <div className={styles.linkrow}>
                    <p className={styles.link}>{child.link}</p>
                </div>
              </div>
            
             </div>
             </div>
            );
          }) }
        </Carousel>
    );
  }
}