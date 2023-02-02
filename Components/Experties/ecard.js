import React from 'react'
import styles from '../../styles/Home.module.css'
import one from '../../public/one.png'
import two from '../../public/two.png'
import Image from 'next/image'
import three from '../../public/three.png'

function Ecard() {
  return (
    <div className={styles.erow}>
    <div className={styles.ecard}>
       <div className={styles.row}>
         <figure className={styles.one}>
           <Image
            src={one}
            alt="banner"
            fill           
             />
        </figure>
        <h3 className={styles.h3}>Project<br></br>Management</h3>
       </div>
       <div className={styles.rows}>
       <div className={styles.her}>
          <span>{`<h3>`}</span>
          <div className={styles.line}></div>
          <span>{`</h3>`}</span>
          </div>
       <div className={styles.cdes}>
            <h4 className={styles.h4}>Project Management</h4>
               <ul>
                  <li>Tools: JIRA, ClickUp, Trello,<br></br> Asana</li>
                  <li>Methodologies: Agile, Scrum</li>
                  <li>Communication: Slack, Mattermost</li>
               </ul>
       </div>
       </div>
    </div>
    <div className={styles.ecard}>
       <div className={styles.row}>
         <figure className={styles.two}>
           <Image
            src={two}
            alt="banner"
            fill           
             />
        </figure>
        <h3 className={styles.h3}>Web Dev<br></br>Frontend-Backend</h3>
       </div>
       <div className={styles.rows}>
       <div className={styles.her}>
          <span>{`<h3>`}</span>
          <div className={styles.line}></div>
          <span>{`</h3>`}</span>
          </div>
       <div className={styles.cdes}>
            <h4 className={styles.h4}>Web Backend / Rest APIs:</h4>
               <ul>
                  <li>Core PHP, Laravel, Symphony</li>
                  <li>Python</li>
               </ul>
              <h4 className={styles.h4}>Web Frontend:</h4>
               <ul>   
                 <li>Blade, LiveWire</li>
                 <li>Vue.js, React.js, Next.js</li>
               </ul>
       </div>
       </div>
    </div>
    <div className={styles.ecard}>
       <div className={styles.row}>
         <figure className={styles.three}>
           <Image
            src={three}
            alt="banner"
            fill           
              />
        </figure>
        <h3 className={styles.h3}>Mobile App Dev<br></br>IOS, React Native</h3>
       </div>  
       <div className={styles.rows}>
       <div className={styles.her}>
          <span>{`<h3>`}</span>
          <div className={styles.line}></div>
          <span>{`</h3>`}</span>
          </div>
       <div className={styles.cdes}>
     
            <h4 className={styles.h4}>React Native(Hybrid)</h4>
               <ul>
                  <li>TypeScript</li>
                  <li>Redux</li>
                  <li>Functional Components</li>
               </ul>
               <h4 className={styles.h4}>iOS (Native):</h4>
               <ul>
                  <li>Swift, SwiftUI, Objective-C</li>
                  <li>Autolayouts, Storyboards</li>
                  <li>MVC, MVVM, VIPER</li>
               </ul>
       </div>
       </div>
    </div>
    </div>
  )
}

export default Ecard



