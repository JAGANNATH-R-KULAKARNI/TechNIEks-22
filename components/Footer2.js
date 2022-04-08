import React from "react";
import Image from "next/image";
import { Swiper } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import styles from "../styles/Footer1.module.css";

function Footer() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.contents_why}>
          <div className={styles.img_conatiner}>
            <Image
              src="/images/man.png"
              alt=""
              height="350px"
              width="300px"
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
              Dance
            </h1>
            <br />
            <p style={{ lineHeight: 1.5 }}>
              Competitive dance is a popular, widespread sport in which
              competitors perform dances in any of several permitted dance
              styles—such as acro, ballet, contemporary, jazz, hip-hop, lyrical,
              modern, musical theatre, tap, and improv—before a common group of
              judges
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
              Sports
            </h1>
            <br />
            <p style={{ lineHeight: 1.5 }}>
              a contest held to determine the best athletes and teams and
              greatest achievements in sports, to improve athletic skills, and
              to popularize physical culture and sports. Sports competitions
              provide an opportunity to evaluate objectively the sports
              organizations, coaches, athletes, and officials. International
              sports competitions are an important means of strengthening
              friendship and mutual understanding among athletes of different
              countries. World sports competitions include the Olympic Games,
              the World Student Games, world championships and world cups, and
              specialized Olympiads, for example, in chess. They also include
              continental championships, cups, and national games and
              competitions. Competitions may be held in a single sport or in
              various sports, for example in the Olympic Games, World Student
              Games, and Spartakiads, including Spartakiads of Friendly Armies
              and Spartakiads of the Peoples of the USSR.
            </p>
          </div>
          <div className={styles.img_conatiner}>
            <Image
              src="/images/ball.png"
              alt=""
              height="400px"
              width="300px"
            ></Image>
          </div>
        </div>
        <div className={styles.contents_why}>
          <div className={styles.img_conatiner}>
            <Image
              src="/images/fash.png"
              alt=""
              height="300px"
              width="350px"
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
              Fashion
            </h1>
            <br />
            <p style={{ lineHeight: 1.5 }}>
              For young fashion designers above all, now more than ever, it is
              important to take advantage of all the opportunities made
              available at an international level and this is where fashion
              contests come into play. Precisely for this reason, we have
              decided to gather the most important international fashion
              competitions, creating a detailed calendar of the events, dates
              and the prestigious fashion prizes.
            </p>
          </div>
        </div>
        {/* ---------------------------- */}
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
              Concert
            </h1>
            <br />
            <p style={{ lineHeight: 1.5 }}>
              The definition of a concert is a live musical performance or
              mutual agreement. An example of a concert is a venue where you can
              listen to your favorite musician. An example of a concert is two
              people agreeing on the best way to handle a difficult situation.
            </p>
          </div>
          <div className={styles.img_conatiner}>
            <Image
              src="/images/concer.png"
              alt=""
              height="400px"
              width="300px"
            ></Image>
          </div>
        </div>
        {/* ---------------------------- */}
        <div className={styles.contents_top}>
          <div className={styles.img_container}>
            <div
              className={styles.img_absolute}
              style={{ marginTop: "-150px" }}
            >
              <Image
                src="/images/dance2.png"
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
              }}
            >
              Gear Up Your Child's Growth<br></br>With Robotics
            </h1>
            <div style={{ height: "50px" }}></div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Footer;
