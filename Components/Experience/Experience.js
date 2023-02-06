import React, { useState } from 'react'
import styles from '../../styles/Home.module.css'

function Experience() {
  const [tab, setTab] = useState(1)
  const experience = [
    {"key":"1",
        "Company":"OBS Technologia",
    "Position":"CTO @ OBS Technologia",
    "Time":"2020 - Present",
    "Roles":["As a project manager, communicated and collaborated with multi-disciplinary teams of Developers, Designers, Clients, and stakeholders daily."," Custom Cocoa Pods Creation, SDK development","Implemented Payment Gateways such as Stripe, PayPal, CCBill, and Flutter wave.","Single Payment, Fixed Price Subscriptions, Payment Intents, Checkout","Card Management, Pre-Authorized card and Bank Payments","Merchant Payout (Stripe & PayPal)","Implemented various Firebase techniques such as:","Authentication","Firebase Messaging: Push Notifications, Real-Time Chat","Crashlytics, Google Analytics, Performance Monitoring","Dynamic Linking, Hosting, App Distribution"]},
    {"key":"2",
        "Company":"O3 Interfaces",
    "Position":"CTO @ O3 Interfaces",
    "Time":"March 2020 – Aug 2020",
    "Roles":["Swift & Objective - C development","Auto Layouts, Swift UI, Storyboard (UI/UX Implementation)","Animations and Transitions","Adaptive Layouts (Responsive to All Apple Devices)","MVC , MVVM, MVP Architecture implementation","Cocoa Pods","Unit Testing & UI Testing","Firebase /SQLite /Coredata database management","Push notification, In-App implementation","Core Bluetooth (Device Connectivity and Communication)","Core Data Implementations for Persistence & Database Management","Firebase Integration for Database Management & Analytics","Data Encryption Algorithms (Security Layering)","REST & SOAP APIs Integration","JSON Data Handling","Core Graphics Implementation"]},
    {"key":"3",
        "Company":"Developer’s Lab",
    "Position":"CTO @ Developer’s Lab",
    "Time":"March 2018 – Jan 2019",
    "Roles":["Asp.Net MVC Applications","Server Side (Backend)","Multiple User Functionalities","Session Handling","Data Encryption","HTML , CSS , JavaScript & jQuery Websites"]},
    {"key":"4",
        "Company":"Airtango Pvt Ltd",
    "Position":"CTO @ Airtango Pvt Ltd",
    "Time":"May 2019 - Oct 2019",
    "Roles":["React.js Development","iOS Development using Auto layout & storyboards"]}
    ]
  return (
    <div className={styles.experience} id="experience">
      <div className={styles.first}>
        <h2 className={styles.h2}>
          <span className={styles.span}>02.</span>
          Professional Experience</h2>
        <div className={styles.line}>
        </div>
      </div>
      <div className={styles.second}>
        <div className={styles.left}>{
          experience.map((exp,index) =>{
         return   <h2 key={index} className={tab == exp.key ? styles.h12:styles.h2} onClick={() => { setTab(exp.key) }}>{exp.Company}</h2>
          })
        }
          
          {/* <h2><button onClick={() => { setTab(2) }}>obs</button></h2> */}

        </div>
        <div className={styles.right}>
         <div className={styles.topbox}>
            <h2 className={styles.h2}>CTO @ <span> {experience[tab -1 ]?.Company}</span></h2>
            <span className={styles.span}>{experience[tab - 1]?.Time}</span>
            <ul>
               {experience[tab-1]?.Roles?.map((role,index)=>{
               return   <li key={index}>{role}</li>
               })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience