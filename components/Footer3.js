import React from "react";
import Grid from "@mui/material/Grid";
import styles from "../styles/Footer.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import Footer2 from "./Footer2";
import Video from "./Video";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Route } from "@mui/icons-material";
import { useRouter } from "next/router";
import * as c from "../utils/Colors";

function Footer() {
  const m1 = useMediaQuery("(min-width:430px)");
  const router = useRouter();

  return (
    <div>
      <div>
        <Video
          heading="ತ್ರಯಾಗ್ನಿ 2022"
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
          fontFamily: "Bungee",
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
              fontFamily: "Bungee",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: m1 ? "23px" : "15px",
                  fontFamily: "Bungee",
                }}
              >
                About
              </h3>
              <p
                style={{
                  fontSize: m1 ? "11px" : "10px",
                  lineHeight: 1.7,
                  wordSpacing: m1 ? "5px" : "3px",

                  fontStyle: "italic",
                }}
              >
                The New Year Trayagnie promises a period of joy and celebrations
                unlike the past two years Sarvari and Plava where people faced
                the Corona pandemic and loss of life. This year is best for
                performing auspicious events like weddings, construction of new
                homes, housewarming etc. People born in this Trayagnie year will
                be principled ones. trying to do good to others. They will also
                learn many sciences and live long.
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
                  fontFamily: "Bungee",
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

                <li
                  className={styles.footer}
                  style={{ fontSize: m1 ? "15px" : "9px" }}
                  onClick={() => router.push("/info/terms&conditions")}
                >
                  {"Terms & Conditions"}
                </li>
                <li
                  className={styles.footer}
                  onClick={() => router.push("/info/privacy_policies")}
                >
                  {"Privacy Policy"}
                </li>
                <li
                  className={styles.footer}
                  onClick={() => router.push("/info/refunds")}
                >
                  {"Refunds"}
                </li>
                <li
                  className={styles.footer}
                  onClick={() => router.push("/about")}
                >
                  {"About"}
                </li>
                <li
                  className={styles.footer}
                  onClick={() => router.push("/info/creaters")}
                >
                  {"Creaters"}
                </li>
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
                  fontFamily: "Bungee",
                }}
              >
                <h3
                  style={{
                    fontSize: m1 ? "23px" : "15px",
                    fontFamily: "Bungee",
                  }}
                >
                  {" "}
                  {"Designers"}
                </h3>
                <a
                  href="https://www.linkedin.com/in/jagannath-r-kulakarni-a465841a7/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <li className={styles.footer}>Jagannath R K</li>
                </a>
                <a
                  href="https://www.linkedin.com/in/prajwal-benedict-a-048511186/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <li className={styles.footer}>Prajwal Benedict </li>
                </a>

                <a
                  href="https://vishakha-portfolio.vercel.app/"
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
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingLeft: m1 ? "0%" : "10%",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginLeft: "-10px",
                  }}
                >
                  <a
                    href="https://www.instagram.com/technieks_2022/?hl=en"
                    passHref={true}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <InstagramIcon
                      style={{
                        fontSize: m1 ? "50px" : "30px",
                        paddingLeft: "10px",
                      }}
                      className={styles.footer}
                    />
                  </a>
                  {/* <a
                    href="https://www.linkedin.com/in/jagannath-r-kulakarni-a465841a7/"
                    passHref={true}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <LinkedInIcon
                      style={{
                        fontSize: m1 ? "50px" : "30px",
                        paddingLeft: "10px",
                      }}
                      className={styles.footer}
                    />
                  </a> */}
                  <a
                    href="https://www.youtube.com/channel/UC0Ky30GAIfdtGccczVNUIqA"
                    passHref={true}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <YouTubeIcon
                      style={{
                        fontSize: m1 ? "50px" : "30px",
                        paddingLeft: "10px",
                      }}
                      className={styles.footer}
                    />
                  </a>{" "}
                  <a
                    href="https://twitter.com/technieks"
                    passHref={true}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <TwitterIcon
                      style={{
                        fontSize: m1 ? "50px" : "30px",
                        paddingLeft: "10px",
                      }}
                      className={styles.footer}
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/techNIEks/"
                    passHref={true}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FacebookIcon
                      style={{
                        fontSize: m1 ? "50px" : "30px",
                        paddingLeft: "10px",
                      }}
                      className={styles.footer}
                    />
                  </a>
                </div>
                <h4
                  className={styles.footer}
                  style={{ marginTop: m1 ? "0px" : "-7px" }}
                >
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
                    className={styles.footer}
                  >
                    Copyright© TechNIEks 22
                  </a>
                </h4>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: m1 ? "-20px" : "-15px",
          paddingLeft: "10%",
          paddingRight: "10%",
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: m1 ? "15px" : "10px",
            fontFamily: "Bungee",
          }}
        >
          <i style={{ color: c.c3, paddingRight: "10px" }}> address : </i>{" "}
          Mananthavadi Rd, Vidyaranyapura, Mysuru, Karnataka 570008
        </p>
      </div>
    </div>
  );
}

export default Footer;
