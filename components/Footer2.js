import React from "react";
import Image from "next/image";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import styles from "../styles/Footer1.module.css";
import * as c from "../utils/Colors";
import Body from "./body/Body";
import useMediaQuery from "@mui/material/useMediaQuery";

function Footer() {
  const m1 = useMediaQuery("(min-width:430px)");

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.contents_why}>
          <div className={styles.img_conatiner}>
            <Image
              src="/images/man1.png"
              alt=""
              width="576px"
              height="433px"
            ></Image>
          </div>
          <div className={styles.desc}>
            <h1
              style={{
                margin: "10px 0",
                textShadow: "2px 0",
                letterSpacing: "2px",
                fontSize: 34,
                fontWeight: "bold",
              }}
            >
              Marathon
            </h1>
            <br />
            <p style={{ lineHeight: 1.7, wordSpacing: "5px" }}>
              The marathon was one of the original modern Olympic events in
              1896. In honor of this legendary sport National Institute of
              Engineering conducts Marathon every year as part of techNIEks
              techno- cultural fest. The marathon is usually conducted for a
              cause (last year data) and this year its been conducted to empower
              the distressed women. Whatever proceeds we obtain from the
              marathon would be donated to Shaktidhama founded by Puneet Raj
              Kumar
            </p>
          </div>
        </div>
        <div className={styles.contents_why}>
          <div className={styles.desc}>
            <h1
              style={{
                margin: "10px 0",
                textShadow: "2px 0",
                letterSpacing: "2px",
                fontSize: 34,
                fontWeight: "bold",
              }}
            >
              Cyclothon
            </h1>
            <br />
            <p style={{ lineHeight: 1.7, wordSpacing: "5px" }}>
              Cyclothon is a sporting event, that aims to highlight fitness,
              health, charity and fun at the same time. Cyclists can showcase
              their skills to the fullest.After 3 long years the Cyclothon is
              back with full force and is being conducted on the same day as the
              marathon. Whatever proceeds we obtain from the event would be
              donated to Shaktidhama founded by Puneet Raj Kumar.
            </p>
          </div>
          <div className={styles.img_conatiner}>
            <img
              src="/images/cg.gif"
              alt=""
              style={{
                height: m1 ? "400px" : "300px",
                width: "auto",
                marginTop: m1 ? "0px" : "100px",
              }}
            ></img>
          </div>
        </div>

        {/* ---------------------------- */}

        {/* ---------------------------- */}
        <div className={styles.contents_top} style={{ backgroundColor: c.c4 }}>
          <div className={styles.img_container}>
            <div
              className={styles.img_absolute}
              style={{ marginTop: "-150px" }}
            >
              <img
                src="/images/cg.gif"
                alt=""
                style={{
                  height: m1 ? "400px" : "300px",
                  width: "auto",
                  marginTop: m1 ? "0px" : "100px",
                }}
              ></img>
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
              ತ್ರಯಾಗ್ನಿ Trayagnie
              <br />
              2022
              <br />
              <div style={{ marginLeft: m1 ? "-20px" : "0px" }}>
                <Body />
              </div>
            </h1>
            <div style={{ height: "10px" }}></div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Footer;
