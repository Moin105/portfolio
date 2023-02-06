import React, { Component, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import Testimonials from "./testimonials";
// import Image from "next/image";
// import styles from '../../styles/Home.module.css'
import Card from "./Card";
// import next from "../public/next.png";
// import prev from "../public/prev.png";
// import p1 from '../../public/p1.png'

export default class NextJsCarousel extends Component {
  //  constructor(props){super(
  //       console.log("salay",this.props)

  //  )
  //  }
  
 
  render() {console.log("salay",this.props)
    const feeds= [
        {
      "name": "@VoRides",
      "remark": "I have been working with Osama for a long time. He is a good and very competent individual. The work is carried out quickly and accurately on time. Very satisfied with  his work, and I hope to work more in the future. I recommend Osama."
      },
      {
      "name": "@EcareDocta",
      "remark": "Osama did a great job. He was able to build the app according to my specifications. He didn't complete the project on time; however, he communicated with me ahead of time so that I knew that I could expect delays but other than that, job well done. Best of luck team Osama!"
      },
      {
      "name": "@Randox Certifly",
      "remark": "Osama always get the job done! He worked on this project diligently and delivered a great product. Osama is a good hire and an intelligent young man. He always achieves the goals and the result is amazing every time."
      },
      {
      "name": "@World Enterprises",
      "remark": "Osama is an exceptional talent. He knows what he is doing and is very responsive. He was able to build the two apps that I needed for iOS and Android. The end product was the same as promised. I would recommend him to meet your IT needs. I will most definitely be working with him again! "
      },
      {
      "name": "@Writer’s Lock",
      "remark": "Osama has an extremely well-rounded skill set across IOS and Android mobile app development. He was able to successfully bring my designs to life, within IOS and Android domain; by turning my wireframes and requirements into apps. "
      },
      {
      "name": "@Pet Friendly",
      "remark": "Based on my working experience with Osama, I will always recommend this talented developer. He is very smart and assist well in the brainstorming process. He was able to work with me from design to final product."
      }
      ] 

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
        //   itemSize={100/3}
        // renderItem=
        selectedItem={4}
          showStatus={false}
          centerMode
          centerSlidePercentage={100 / this.props.number}
          showThumbs={false}
        interval={2000}
          autoPlay={true}
          infiniteLoop={true}
          style={{ ...arrowStyles, left: 15 }}
        >
          {feeds?.map((feed, index) => {
            return (
                <Card key={index} name={feed.name} remark={feed.remark}/>
            );
          })}
        </Carousel>
    );
  }
}