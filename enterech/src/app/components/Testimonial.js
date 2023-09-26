import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../style/Testimonial.module.css";
import testibg from "../img/testibg.svg";
import testi from "../img/testi.svg";
import testiicon from "../img/testiicon.svg";

const Testimonial = () => {
  return (
    <section className={styles.indexTesti}>
      <div className={styles.up}>

        <div className={styles.indexInfo}>
        <div className={styles.info}>
        <span>Our Statistics</span>
          <h1>Some Important Facts</h1>
        </div>
        <div className={`${styles.info} ${styles.info2}`}>
          <h1>5000+</h1>
         <h4>Residential Projects</h4>
        </div>
        <div className={`${styles.info} ${styles.info2}`}>
          <h1>1000+</h1>
          <h4>Commercial Projects</h4>
        </div>
        <div className={`${styles.info} ${styles.info2}`}>
          <h1>15000+</h1>
          <h4>Industrial Projects</h4>
        </div>
        </div>
      </div>
      <div className={styles.down} style={{ textAlign: 'right' }}>
        <Image src={testibg}/>


        <div className={styles.testimonial}>
                <div className={styles.testiImg}>
                        <Image src={testi}/>
                        <Image src={testiicon} id={styles.testiicon}/>

                </div>
                <div className={styles.detail}>
                            <span>What Our Clients Say</span>
                            <h2>profession, Reliable & COST Effective</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis aliquet odio, sit amet rutrum magna. Duis cursus leo in condimentum cursus. Etiam vitae interdum ex, suscipit aliquam erat. Donec lacinia imperdiet mi, ut mattis sem pulvinar a. Praesent placerat, velit at luctus pulvinar, dolor est faucibus orci, vel posuere tellus enim non elit</p>
                            <h4><hr />Emery Culhane</h4>
                            <div className={styles.circel}>
                                <span></span>
                            </div>
                </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonial;
