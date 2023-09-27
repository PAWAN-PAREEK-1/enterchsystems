"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Navbar";
import Footer from "@/app/components/Footer2";
import hori from "../img/hori.svg";
import styles from "@/app/style/Product.module.css";
import blub1 from "../img/blub1.svg";
import blub2 from "../img/blub2.svg";
import blub3 from "../img/blub3.svg";
import blub4 from "../img/blub4.svg";

const AboutBox = ({ imageSrc, title, description, link }) => (
  <div className={styles.aboutBox}id={styles.aboutBox}>
    <Image src={imageSrc} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <Link href={link} id="a">
      <div className="btn btn-p-more">More Info</div>
    </Link>
  </div>
);

const aboutBoxesData = [
  {
    imageSrc: blub1,
    title: "Control Panel",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam non odio in efficitur. Fusce tincidunt.",
    link: "/Product",
  },
  {
    imageSrc: blub2,
    title: "Secure",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam non odio in efficitur. Fusce tincidunt.",
    link: "/link2",
  },

  {
    imageSrc: blub3,
    title: "Control Panel",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam non odio in efficitur. Fusce tincidunt.",
    link: "/link1",
  },
  {
    imageSrc: blub4,
    title: "Secure",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam non odio in efficitur. Fusce tincidunt.",
    link: "/link2",
  },
  {
    imageSrc: blub1,
    title: "Control Panel",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam non odio in efficitur. Fusce tincidunt.",
    link: "/link1",
  },
  {
    imageSrc: blub2,
    title: "Secure",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam non odio in efficitur. Fusce tincidunt.",
    link: "/link2",
  },

  {
    imageSrc: blub3,
    title: "Control Panel",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam non odio in efficitur. Fusce tincidunt.",
    link: "/link1",
  },
  {
    imageSrc: blub4,
    title: "Secure",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam non odio in efficitur. Fusce tincidunt.",
    link: "/link2",
  },
  {
    imageSrc: blub1,
    title: "Control Panel",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam non odio in efficitur. Fusce tincidunt.",
    link: "/link1",
  },
  {
    imageSrc: blub2,
    title: "Secure",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam non odio in efficitur. Fusce tincidunt.",
    link: "/link2",
  },

  {
    imageSrc: blub3,
    title: "Control Panel",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam non odio in efficitur. Fusce tincidunt.",
    link: "/link1",
  },
  {
    imageSrc: blub4,
    title: "Secure",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam non odio in efficitur. Fusce tincidunt.",
    link: "/link2",
  },

];

const ProductsPage = () => {
  return (
    <div>
      <Header />
      <div className="hero-all">
        <h1>Products</h1>
        <Image src={hori} alt="Hero Image" />
      </div>

      <section>
        <div className="index">
          <div className={styles.up}>
            <h2>Our <span>Products</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam non odio in efficitur. Fusce tincidunt purus et dui molestie pharetra sits finibus nulla, id varius eros porta eu. Quisque egestas porta nunc.</p>
          </div>

          <div className={styles.pDown}>
            <div className={styles.down} id={styles.down}>
              {aboutBoxesData.map((boxData, index) => (
                <AboutBox key={index} {...boxData}  />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;

