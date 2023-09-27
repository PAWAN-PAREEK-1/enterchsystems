"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../style/Recent.module.css";
import "../globals.css";
import r1 from "../img/r1.svg";
import r2 from "../img/r2.svg";
import r3 from "../img/r3.svg";
import rightArrow from "../img/rightarrow.svg";

const Recents = () => {
  const [images, setImages] = useState([
    // Add your image URLs here dynamically
  r1, r2, r3,  r1, r2, r3,  r1, r2, r3,  r1, r2, r3,
    // Add more images as needed
  ]);

  return (
    <section>
      <div className={styles.index}>
        <div className={styles.up}>
          <h2>
            Our Recent <span>Projects</span>{" "}
          </h2>
          <Link href="" id="a">
            <div className="btn ">
              View All
              <Image src={rightArrow} />
            </div>
          </Link>
        </div>

        <div className={styles.down}>
          <div className={styles.imageContainer}>
            {images.map((image, index) => (
              <div key={index} className={styles.imageWrapper}>
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                //   width={200} // Set the desired width
                //   height={150} // Set the desired height
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recents;