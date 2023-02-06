import React ,{ useRef }from 'react'
import styles from '../../styles/Home.module.css'
import Image from "next/image";
import emailjs from '@emailjs/browser';
// import wave from "../public/wave.png";
// import phone from "../public/contactcell.png";
// import Modal from "./modal";
import { useState } from "react";
// import { motion } from "framer-motion";
function Footer() {
  const [show, setShow] = useState(false);
  const [response, setResponse] = useState("");
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const form = useRef();

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  // setShow(true);
  // setTimeout(function () {
  //   setShow(false);
  // }, 1000);
  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (inputs.name == "" || inputs.email == "" || inputs.message == "") {
    
      // setShow(true);
      setResponse("Enter Required Details");
      // setTimeout(function () {
      //   setShow(false);
      // }, 5000);
      return;
    }  else  if(!inputs.email.match(validRegex)){
 
      // setShow(true);
      setResponse("Enter Valid Email");
      // setTimeout(function () {
      //   setShow(false);
      // }, 5000);
    }
    else {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      };

      // fetch("https://globaltechnologia.org/webAdmin/api/contactus", requestOptions)
      //   .then((response) => response.json())
      //   .then((res) => {
      //     console.log(res);
      //     setResponse("Your Response Is Sumbitted");
      //     console.log(res.message);
      //   });
      console.log("first",form.current)
      emailjs.sendForm('service_g4ajb1j', 'portfolio web', form.current, 'uKULfBsFc8X6SsMIC')
      .then((result) => {
          console.log("sher",result.text);
      }, (error) => {
          console.log("sher",error.text);
      });
  
        setInputs({ name: "",
        email: "",
        message: "",})
        setShow(false)
      // setShow(true);
      // setTimeout(function () {
      //   setShow(true);
      // }, 1000);
      // setTimeout(function () {
      //   setShow(false);
      // }, 3000);
    }
    setResponse("Thank you")
  };
  return (
    <div className={styles.footer} id="contact">
          <div className={styles.containor}>
      {response !== "" ?<h2 className={styles.h2}>{response}</h2> :                  !show &&  <><h2 className={styles.h2}>Don’t be a stranger!</h2> <p className={styles.p}>Available for select freelance opportunities<br></br>
Have an exciting project you need help with? Send me an email or<br></br> contact me via instant message!
</p>
   <div className={styles.out}  onClick={()=>{setShow(true)}}>
            <div className={styles.inner}>
                <h3 className={styles.h3}>
                Let’s<br></br>chat
                </h3>
            </div>
          </div></>}
   
         {show &&   <div className={styles.contact}>
              {/* <figure className={styles.waves}>
                <Image
                  src={wave}
                  alt='quote'
                  layout='fill'
                  objectFit='contain'
                  smooth='true'
                />
              </figure> */}
              <div className={styles.contact_us}>
                <h3>Contact Me</h3>
                <p>I would love to hear from you.</p>
                <div className={styles.form}>
                  <form ref={form}>
                    <div className={styles.row}>
                      <input
                        type='text'
                        name='name'
                        id='name'
                        placeholder='Name'
                        value={inputs.name}
                        onChange={handleChange}
                       
                      />
                      <input
                        type='text'
                        name='email'
                        id='email'
                        placeholder='Email'
                        value={inputs.email}
                        onChange={handleChange}
                       
                      />
                    </div>

                    <textarea
                      type='text'
                      name='message'
                      id='message'
                      placeholder='Message'
                      className={styles.message}
                      value={inputs.message}
                      onChange={handleChange}
                     
                    />
                  </form>
                  <button
                    onClick={handleSubmit}
                    className={styles.formtbtn}
                   >
                    Let&apos;s talk
                  </button>
                </div>
              </div>
              {/* <figure className={styles.contact_cell}>
                <Image
                  src={phone}
                  alt='quote'
                  layout='fill'
                  objectFit='contain'
                />
              </figure> */}
            </div>}
          </div>
    </div>
  )
}

export default Footer