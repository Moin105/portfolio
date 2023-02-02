import Image from 'next/image';
import React from 'react';
import styles from '../../styles/Home.module.css';
import banner from '../../public/banner.png';

function Banner() {
  return (
    <>
        <figure className={styles.banner}>
           <Image
            src={banner}
            alt="banner"
fill             />
        </figure>
    </>
  )
}

export default Banner