import React from "react";
import Grid from "@mui/material/Grid";
import styles from "../styles/Footer.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import Footer2 from "./Footer2";
import Video from "./Video";

function Footer() {
  const m1 = useMediaQuery("(min-width:430px)");

  return (
    <div>
      <Video
        heading="ಸುಭಕೃತು 2022"
        img="/images/subha.png"
        src="https://youtube.be/embed/YR9iyeWNF58?rel=0"
      />
      <Footer2 />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: m1 ? "10%" : "0%",
          paddingRight: "10%",
          // color: c.c3,
        }}
      >
        <Grid container spacing={0}>
          <Grid
            item
            xs={m1 ? 4 : 12}
            style={{
              display: "flex",
              justifyContent: m1 ? "center" : "left",
              paddingLeft: m1 ? "0%" : "12%",
            }}
          >
            <div>
              <h3 style={{ fontSize: m1 ? "20px" : "15px" }}>About</h3>
              <p style={{ fontSize: m1 ? "15px" : "10px" }}>
                The annual techno-cultural fest at The National Institute of
                Engineering, Mysore The New Year Subhakritu promises a period of
                joy and celebrations unlike the past two years Sarvari and Plava
                where people faced the Corona pandemic and loss of life. Let us
                celebrate with TechNIEks 22
              </p>
            </div>
          </Grid>
          <Grid
            item
            xs={m1 ? 4 : 6}
            style={{ display: "flex", justifyContent: m1 ? "center" : "left" }}
          >
            <div>
              <ul
                style={{
                  listStyleType: "none",
                  fontSize: m1 ? "15px" : "10px",
                }}
              >
                <h3 style={{ fontSize: m1 ? "20px" : "15px" }}> Legal Info</h3>
                <li className={styles.footer}>{"Creater"}</li>
                <li className={styles.footer}>{"Terms & Conditions"}</li>
                <li className={styles.footer}>{"Privacy Policy"}</li>
                <li className={styles.footer}>{"FAQ's"}</li>
                <li className={styles.footer}>{"About"}</li>
              </ul>
            </div>
          </Grid>

          <Grid
            item
            xs={m1 ? 4 : 6}
            style={{ display: "flex", justifyContent: m1 ? "center" : "left" }}
          >
            <div>
              <ul
                style={{
                  listStyleType: "none",
                  fontSize: m1 ? "15px" : "10px",
                }}
              >
                <h3
                  style={{
                    fontSize: m1 ? "20px" : "15px",
                  }}
                >
                  {" "}
                  {"Team Details"}
                </h3>
                <li className={styles.footer}>Prajwal Benedict</li>
                <li>Lohith C</li>
                <li>Bharat </li>
                <li>Niraj Sharma</li>
                <li>Jagannath R Kulakarni</li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div style={{ display: "flex", paddingLeft: m1 ? "0%" : "12%" }}>
              <h4 className={styles.footer}>
                <a
                  href="https://nie.ac.in/"
                  passHref={true}
                  rel="noreferrer"
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    fontWeight: "lighter",
                    fontSize: m1 ? "15px" : "12px",
                    color: "black",
                  }}
                >
                  Copyright© TechNIEks 22
                </a>
              </h4>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
