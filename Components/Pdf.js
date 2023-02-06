// import React, { useEffect, useRef } from 'react';
// import pdf from '../public/pdf.pdf'
// require('../public/pdf.pdf')
// export default function Pddf() {
// 	const containerRef = useRef(null);

// 	useEffect(() => {
// 		const container = containerRef.current;
// 		let PSPDFKit;

// 		(async function () {
// 			PSPDFKit = await import('pspdfkit');

// 			if (PSPDFKit) {
// 				PSPDFKit.unload(container);
// 			}

// 			await PSPDFKit.load({
// 				container,
// 				document: require('../public/pdf.pdf'),
// 				baseUrl: `${window.location.protocol}//${window.location.host}/`,
// 			});
// 		})();

// 		return () => PSPDFKit && PSPDFKit.unload(container);
// 	}, []);

// 	return <div ref={containerRef} style={{ height: '100vh' }} />;
// }
import React, { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
// import { FileViewer } from "react-file-viewer";
import dynamic from "next/dynamic";
import WebViewer from "@pdftron/webviewer";
import styles from '../styles/Home.module.css'
// const FileViewer = dynamic(() => import('react-file-viewer'), {
//     ssr: false
// });
// import url from '../public/pdf.pdf'
// import pdf from '../public/pdf.pdf'
//PDFjs worker from an external cdn
// const url =
//   "https://cors-anywhere.herokuapp.com/https://www2.ed.gov/parents/schools/find/choose/choosing.pdf";
  const sada = dynamic(()=> import('@pdftron/webviewer'))
export default function Pdf() {
  const viewer = useRef(null)
  useEffect(() => {
  typeof window &&  import('@pdftron/webviewer').then(()=>{
      WebViewer(
        {
          path:'/lib',
          initialDoc:'/pdf.pdf'
        },
        viewer.current,
      ).then((instance)=>{
          const {docViewer} = instance
      })
    })
  }, [])
  
    // const url = pdf;
//    const url = '../public/pdf.pdf'
// //   pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);
//   const file = '../public/pdf.pdf'
//   const type = 'pdf'
//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//     setPageNumber(1);
//   }
  return (
    <>
      <div className="main">
        <div className={styles.pdf} ref={viewer} style={{height:"100vh",margin:"40px 0px 0px 0px"}}></div>
      {/* <FileViewer
        fileType={type}
        filePath={file}
        
        // errorComponent={CustomErrorComponent}
        // onError={this.onError}
        />
        <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document> */}
      </div>
    </>
  );
}
