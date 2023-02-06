import Image from 'next/image'
import React ,{useEffect, useState}from 'react'
import styles from '../../styles/Home.module.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import NavButton from '../Buttons/NavButton'
import Link from 'next/link'
import Nav from '../Nav'
import obs from '../../public/obs.png'
import useWindowSize from '../Hooks/useWindow'
function Header() {  
  const [nav, setNav] = useState(false);
  const [show,setShow] = useState(false)
    const navHandle = () => {
      // console.log("$$$$$$$$$$$$$$$$$$$$$$$$", router);
      setNav(!nav);
    };
    const size = useWindowSize()
    useEffect(() => {
        if(size.width < 800){
          setShow(true)
        }else{
          setShow(false)
        }
    }, [size.width])
    
  return (
    <>
    <div className={styles.header}>
         <figure className={styles.logo}>
         <Image
            src={obs}
            alt="ecare"
            layout="fill"
            objectFit="contain"
         />
         </figure>

         <ul>
         <Link href="/#about"><NavButton name="about" /></Link>
         <Link href="/#experience"><NavButton name="experience" /></Link> 
         <Link href="/#portfolio"><NavButton name="portfolio" /></Link>
         <Link href="/#contact"><NavButton name="contact" /></Link>
         <Link href="/Resume"><NavButton name="resume"   /></Link>
         </ul> 
   {   show &&   <span onClick={navHandle} className={styles.navbar}>
          {/* <figure className={styles.ham}>
            <Image
              src={hamburger}
              alt="OBS TECHNOLOGIA"
              layout="fill"
              objectFit="contain"
            />
          </figure> */}
          <div className={styles.ham}>
            <GiHamburgerMenu/>
          </div>
          
        </span>}
   
    </div>   {nav && <Nav setNav={setNav} />}</>
  )
}

export default Header