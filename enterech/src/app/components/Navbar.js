"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from "@/app/style/Header.module.css";
import location from "../img/location.svg";
import time from "../img/time.svg";
import face from "../img/face.svg";
import insta from "../img/insta.svg";
import twit from "../img/twit.svg";
import tel from "../img/tel.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <header>
        <div className={styles.head}>
          <div className={styles.heading}>
            <span href=""><Image src={insta} alt="sa" /></span>
            <span href=""><Image src={face} alt="" /></span>
            <span href=""><Image src={twit} alt="" /></span>
            <span href=""> <Image src={tel} alt="" /></span>
          </div>

          <div className={styles.headmail}>
            <div className={`${styles.info} ${styles.info1}`}>
              <span href="">
                <Image src={location} alt="" />
                <h1>C-201,Udhna Sangh Comercial Complex, Udhna , Surat</h1>
              </span>
            </div>
            <div className={styles.info}>
              <span href="tel:1800 8899 757">
                <Image src={time} alt="" />
                <h1>Mon-Fri : 08:00 AM -5:00PM</h1>
              </span>
            </div>
          </div>
        </div>

        <div className={styles.mainhead}>
          <Image src={""} alt="" id="logo" />

          <div>
            <nav>
              <div className={`menuIcon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </div>

              <ul className={styles.NavbarList}>
                <li>
                  <Link href="/" onClick={closeMenu}>
                    <span className={menuOpen ? "active" : ""}>Home</span>
                  </Link>
                </li>
                {/* Add other navigation links here */}
              </ul>
            </nav>
            {menuOpen && (
              <div className="mobileNav">
                <div className="closebtn" onClick={() => setMenuOpen(false)}>
                  <Image src="../public/assets/Image/close.svg" alt="" />
                </div>
                <ul>
                  <li>
                    <Link href="/" onClick={closeMenu}>
                      <span className={menuOpen ? "active" : ""}>Home</span>
                    </Link>
                  </li>
                  {/* Add other mobile navigation links here */}
                </ul>
              </div>
            )}
          </div>

          <span href="">
            <div className="btn">GET Estimate</div>
          </span>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
