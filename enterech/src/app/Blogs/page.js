"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Navbar";
import styles from "../style/Blog.module.css";
import style from "@/app/style/BlogPage.module.css";
import "../globals.css";
import rightArrow from "../img/rightarrow.svg";
import b1 from "../img/b1.svg";
import b2 from "../img/b2.svg";

import Footer from "@/app/components/Footer";
import hori from "../img/hori.svg";

const blogData = [
    {
      date: "23 Nov, 2016",
      title: "Outdoor and Motion Lighting",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam non odio in efficitur. Fusce tincidunt...",
      link: "/Blogs",
      image: b1,
    },
    {
      date: "30 Dec, 2016",
      title: "Outdoor and Motion Lighting",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam non odio in efficitur. Fusce tincidunt...",
      link: "Link to Blog 2",
      image: b2,
    },
    {
      date: "23 Nov, 2016",
      title: "Outdoor and Motion Lighting",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam non odio in efficitur. Fusce tincidunt...",
      link: "Link to Blog 1",
      image: b1,
    },
    {
      date: "30 Dec, 2016",
      title: "Outdoor and Motion Lighting",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam non odio in efficitur. Fusce tincidunt...",
      link: "Link to Blog 2",
      image: b2,
    },
    {
      date: "23 Nov, 2016",
      title: "Outdoor and Motion Lighting",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam non odio in efficitur. Fusce tincidunt...",
      link: "Link to Blog 1",
      image: b1,
    },
    {
      date: "30 Dec, 2016",
      title: "Outdoor and Motion Lighting",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam non odio in efficitur. Fusce tincidunt...",
      link: "Link to Blog 2",
      image: b2,
    },
    {
      date: "23 Nov, 2016",
      title: "Outdoor and Motion Lighting",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam non odio in efficitur. Fusce tincidunt...",
      link: "Link to Blog 1",
      image: b1,
    },
    {
      date: "30 Dec, 2016",
      title: "Outdoor and Motion Lighting",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam non odio in efficitur. Fusce tincidunt...",
      link: "Link to Blog 2",
      image: b2,
    },
    {
      date: "23 Nov, 2016",
      title: "Outdoor and Motion Lighting",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam non odio in efficitur. Fusce tincidunt...",
      link: "Link to Blog 1",
      image: b1,
    },
    {
      date: "30 Dec, 2016",
      title: "Outdoor and Motion Lighting",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam non odio in efficitur. Fusce tincidunt...",
      link: "Link to Blog 2",
      image: b2,
    },
    {
      date: "23 Nov, 2016",
      title: "Outdoor and Motion Lighting",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam non odio in efficitur. Fusce tincidunt...",
      link: "Link to Blog 1",
      image: b1,
    },
    {
      date: "30 Dec, 2016",
      title: "Outdoor and Motion Lighting",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam non odio in efficitur. Fusce tincidunt...",
      link: "Link to Blog 2",
      image: b2,
    },


  ];


  const Page = () => {

      const [visibleCount, setVisibleCount] = useState(3);



        return (
          <div>
            <Header />

            <div className="hero-all">
              <h1>Blog</h1>
              <Image src={hori} />
            </div>

            <section>
                <div className="index">

                </div>
            </section>

            <section>
              <div className="index">
                <div className={`${styles.up} ${style.up} `}>
                  <div className={styles.upDetail}>
                    <h1>
                    Related <span> News & Blog</span>{" "}
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam non odio in efficitur. Fusce tincidunt purus et dui
                      molestie pharetra sits finibus nu
                    </p>
                  </div>
                </div>
                <div className={style.down}>
                  <div className={style.Box}>
                    {blogData.slice(0, visibleCount).map((blog, index) => (
                      <div key={index}>
                        <Link href={blog.link}>
                          <div className={`${styles.rightBox} ${style.rightbox}`}>
                            <Image src={blog.image} />
                            <div className={styles.boxDetail}>
                              <h4>{blog.date}</h4>
                              <h1>{blog.title}</h1>
                              <p>{blog.content}</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                  <Link href="" id="a">
            <div className="btn ">
              View All
              <Image src={rightArrow} />
            </div>
          </Link>

                </div>
              </div>
            </section>
            <Footer />
          </div>
        );
      };

      export default Page;