import styles from "../styles/Watch.module.css";
import * as React from "react";
import styles2 from "../styles/Text.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";

function Video(props) {
  const m1 = useMediaQuery("(min-width:430px)");

  return (
    <>
      <h1
        variant="h4"
        component="div"
        gutterBottom
        // className={styles.title}
        // style={{
        //   textShadow: "2px 0",
        //   letterSpacing: "2px",
        //   fontWeight: "bold",
        // }}
        // className={styles2.heading}
        style={{
          fontSize: m1 ? "80px" : "40px",
          textAlign: "center",
          fontFamily: "Bungee",
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
          <p
            className={styles.text}
            style={{
              display: "flex",
              justifyContent: "center",
              lineHeight: 1.7,
              wordSpacing: "5px",
            }}
          >
            <i>
              “ The New Year Subhakritu promises a period of joy and
              celebrations unlike the past two years Sarvari and Plava where
              people faced the Corona pandemic and loss of life. This year is
              best for performing auspicious events like weddings, construction
              of new homes, housewarming etc. People born in this subhakritu
              year will be principled ones. trying to do good to others. They
              will also learn many sciences and live long.”
            </i>
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
