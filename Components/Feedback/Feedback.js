import React, { useEffect ,useState} from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import Carousel from './Carousel'
import Card from './Card'
import useWindowSize from '../Hooks/useWindow'
// import { Carousel } from 'react-responsive-carousel'

function Feedback() { 
    const size = useWindowSize();
    const [num, setNum] = useState(3)
  useEffect(() => {
    if(size.width < 1600){ setNum(3)}
    if(size.width < 1300){ setNum(2.1)}
    if(size.width < 1100){ setNum(1.8)}
    if(size.width < 900){ setNum(1)}
    if(size.width < 550){ setNum(1)}
     console.log("musix",size.width)
  }, [size.width])
  
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
      const sdeef= [
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
  return (
    <div className={styles.feedback} id="about">
        
        <h2 className={styles.h2s}><span className={styles.span}>04.</span>What people are saying about me?</h2>

          <div className={styles.feedrow}>
                {/* {
                    feeds.map((feed,index)=>{
                        return <Card key={index} name={feed.name} remark={feed.remark}/>
                    })
                }
                 */}
                
           <Carousel data ={feeds} number={num}/>
          </div>
          <div className={styles.feedrow}>
          <Carousel data ={sdeef} number={num}/>
                {/* {
                    feeds.map((feed,index)=>{
                        return <Card key={index} name={feed.name} remark={feed.remark}/>
                    })
                } */}
          </div>
    </div>
  )
}

export default Feedback