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
      <div>
        <Video
          heading="ಶುಭಕೃತ್ 2022"
          img="/images/subha.webp"
          src="https://youtube.be/embed/YR9iyeWNF58?rel=0"
        />
      </div>
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
              <h3
                style={{ fontSize: m1 ? "23px" : "15px", fontFamily: "Bungee" }}
              >
                About
              </h3>
              <p
                style={{
                  fontSize: m1 ? "15px" : "10px",
                  lineHeight: 1.7,
                  wordSpacing: m1 ? "5px" : "3px",
                }}
              >
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
                  lineHeight: 1.7,
                  wordSpacing: m1 ? "5px" : "3px",
                }}
              >
                <h3
                  style={{
                    fontSize: m1 ? "23px" : "15px",
                    fontFamily: "Bungee",
                  }}
                >
                  {" "}
                  Legal Info
                </h3>
                <li className={styles.footer}>{"Creater"}</li>
                <li className={styles.footer}>{"Info"}</li>
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
                  lineHeight: 1.7,
                  wordSpacing: m1 ? "5px" : "3px",
                }}
              >
                <h3
                  style={{
                    fontSize: m1 ? "23px" : "15px",
                    fontFamily: "Bungee",
                  }}
                >
                  {" "}
                  {"Team Details"}
                </h3>
                <a
                  href="https://www.linkedin.com/in/prajwal-benedict-a-048511186/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <li className={styles.footer}>Prajwal Benedict </li>
                </a>
                <a
                  href="https://www.linkedin.com/in/jagannath-r-kulakarni-a465841a7/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <li className={styles.footer}>Jagannath R K</li>
                </a>
                <a
                  href="https://www.linkedin.com/in/vishakha-v-4825b4163/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <li className={styles.footer}>Vishakha V </li>
                </a>
                <a
                  href="https://www.linkedin.com/in/niraj-sharma-5538801a7/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <li className={styles.footer}>Niraj Sharma</li>
                </a>
                <a
                  href="https://www.linkedin.com/in/lohith-c-12358b1a7/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <li className={styles.footer}>Lohith C</li>
                </a>
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
                    color: "white",
                    fontFamily: "Bungee",
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
