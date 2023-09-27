"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../style/Recent.module.css";
import "../globals.css";
import recentbg from "../img/recentbg.svg";
import rightArrow from "../img/rightarrow.svg";

const Recents = () => {
  return (
    <section>
        <div className={styles.index}>
                    <div className={styles.up}>
                            <h2>Our Recent <span>Projects</span> </h2>
                            <Link href="" id="a">
              <div className="btn ">
              view All<Image src={rightArrow} />
              </div>
            </Link>
                    </div>

                    <div className={styles.down}>

                    </div>
        </div>
    </section>
  )
}

export default Recents