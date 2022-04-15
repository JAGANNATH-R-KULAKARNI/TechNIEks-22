import React from "react";
import Image from "next/image";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import styles from "../styles/Footer1.module.css";
import * as c from "../utils/Colors";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.contents_top} style={{ backgroundColor: c.c4 }}>
        <div className={styles.img_container}>
          <div className={styles.img_absolute} style={{ marginTop: "-150px" }}>
            <Image
              src="/images/dance2.webp"
              alt=""
              height="512px"
              width="450px"
            ></Image>
          </div>
        </div>
        <div className={styles.desc}>
          <h1
            style={{
              margin: "10px 0",
              color: "white",
              textShadow: "2px 0 white",
              letterSpacing: "3px",
              fontSize: 38,
              fontWeight: "bold",
              fontFamily: "Bungee",
            }}
          >
            ಶುಭಕೃತ್ Shubhakritu
            <br />
            2022
          </h1>
          <div style={{ height: "50px" }}></div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Footer;
