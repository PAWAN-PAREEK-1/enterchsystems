import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Navbar";
import styles from "@/app/style/Index.module.css";
import "../app/globals.css";
import heroimg from "./img/heroel.svg";
import sline from "./img/sline.svg";
import rightArrow from "./img/rightarrow.svg";
import prev from "./img/prev.svg";
import next from "./img/next.svg";

export default function Home() {
  return (
    <main>
      <Header />
      <div className={styles.mainHero}>
        <div className={styles.heroLeft}>
          <div className={styles.line}>
            <Image src={sline} />
          </div>
          <div className={styles.heroDetail}>
            <h3>
              Welcome To <span>Enertech System</span>{" "}
            </h3>
            <h1>
              need any <span>help we are ready for you</span>{" "}
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              facilisis aliquet odio, sit amet rutrum magna. Duis cursus leo in
              condimentum cursus.{" "}
            </p>
            <Link href="" id="a">
              <div className="btn btn-hero">
                Get Estimate Now <Image src={rightArrow} />
              </div>
            </Link>
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.heroImg}>
            <Image src={heroimg} />
            <div className={styles.prevImg}>
              <Image src={prev} />
              <Image src={next} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
