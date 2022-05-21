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
              src="/images/marathona.png"
              alt=""
              width="477px"
              height="523px"
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
                marginTop: m1 ? "0px" : "-80px",
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
          {!m1 ? (
            <div
              className={styles.img_conatiner}
              style={{ marginTop: "-150px" }}
            >
              <img
                src="/images/akcent.png"
                alt=""
                style={{
                  height: m1 ? "400px" : "300px",
                  width: "auto",
                  marginTop: m1 ? "0px" : "100px",
                }}
              ></img>
            </div>
          ) : null}
          <div className={styles.desc}>
            <h1
              style={{
                margin: "10px 0",
                textShadow: "2px 0",
                letterSpacing: "2px",
                fontSize: 34,
                fontWeight: "bold",
                marginTop: m1 ? "0px" : "-50px",
              }}
            >
              Concert
            </h1>
            <br />
            <p style={{ lineHeight: 1.7, wordSpacing: "5px" }}>
              The concept of concert is a live musical performance or mutual
              agreement. Concert can be a venue where you can listen to your
              favorite musician. NIE concert promises to be a fun event where
              you can enjoy the performance of your favorite musician.
            </p>
          </div>
          {m1 ? (
            <div className={styles.img_conatiner}>
              <img
                src="/images/puneeth.png"
                alt=""
                style={{
                  height: m1 ? "400px" : "300px",
                  width: "auto",
                  marginTop: m1 ? "0px" : "100px",
                }}
              ></img>
            </div>
          ) : null}
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
                src="/images/dance2.webp"
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
