import React, { useEffect, useRef } from 'react'
// import WebViewer from "@pdftron/webviewer";
import styles from '../styles/Home.module.css'
import Head from 'next/head';
import Header from '../Components/Header/Header';
// import Pdf from '../Components/Pdf';
import dynamic from 'next/dynamic';
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// 
const Pdf = dynamic(()=>import('../Components/Pdf') , {ssr: false})
// const WebViewer = dynamic(() => import('@pdftron/webviewer'), {ssr: false});
function Resume() {
    // const viewer = useRef(null)
    // useEffect(() => {
    // //   import('@pdftron/webviewer').then(()=>{
    // //     WebViewer(
    // //       {
    // //         path:'/lib',
    // //         initialDoc:'/pdf.pdf'
    // //       },
    // //       viewer.current,
    // //     ).then((instance)=>{
    // //         const {docViewer} = instance
    // //     })
    // //   })
    // async () => {
    //     const WebViewer = await import("@pdftron/webviewer");
    //     WebViewer(
    //       {
    //         path: '/lib',
    //         initialDoc: "/pdf.pdf",
    //       },
    //       viewer.current
    //     ).then(function (instance) {
    //         const {docViewer} = instance
    //     //   instance.setTheme("dark");
    //     });}
    //     console.log("salam",viewer.current)
    // }, [viewer.current])
  return ( typeof window ?
    <>
     <div className={styles.container}>
      <Head>
        <title>Osama Bin Sheraz/Resume</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      {/* <div className={styles.pdf} ref={viewer} style={{height:"100vh"}}></div> */}

    <Pdf/>
    </div>
  </>:    <div className={styles.container}>
      <Head>
        <title>Osama Bin Sheraz/Resume</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      {/* <div className={styles.pdf} ref={viewer} style={{height:"100vh"}}></div> */}

    {/* <Pdfs/> */}
    </div>) 
  
}

export default Resume