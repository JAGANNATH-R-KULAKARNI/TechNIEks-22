import { useState } from "react";
import styles from "../styles/Watch.module.css";
import Image from "next/image";
import * as React from "react";
import ButtonUI from "./Button";

function Video(props) {
  return (
    <>
      <h1
        variant="h4"
        component="div"
        gutterBottom
        className={styles.title}
        style={{
          textShadow: "2px 0",
          letterSpacing: "2px",
          fontWeight: "bold",
        }}
      >
        {props.heading}
      </h1>
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
        <ButtonUI />
      </div> */}

      <br />
      <div className={styles.outer}>
        <div className={styles.desc}>
          <br />
          <p
            className={styles.text}
            style={{
              lineHeight: 1.5,
              display: "flex",
              justifyContent: "center",
            }}
          >
            The New Year Subhakritu promises a period of joy and celebrations
            unlike the past two years Sarvari and Plava where people faced the
            Corona pandemic and loss of life. This year is best for performing
            auspicious events like weddings, construction of new homes,
            housewarming etc. People born in this subhakritu year will be
            principled ones. trying to do good to others. They will also learn
            many sciences and live long.
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles.video_container} style={{ display: "block" }}>
            <iframe
              src={props.src}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

export default Video;
