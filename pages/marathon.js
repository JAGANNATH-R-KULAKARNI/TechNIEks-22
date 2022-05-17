import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { supabase } from "../utils/SupabaseClient";
import React from "react";
import TicketsUI from "../components/booking/Tickets1";
import { useRouter } from "next/router";
import useSWR from "swr";
import * as c from "../utils/Colors";
import Cookies from "js-cookie";
import styles from "../styles/Footer1.module.css";
import Image from "next/image";

export default function Events() {
  const m1 = useMediaQuery("(min-width:600px)");
  const [status, setStatus] = React.useState(false);
  const [events, setEvents] = React.useState([]);
  const [gotit, setGotit] = React.useState(false);

  const router = useRouter();
  const { dataEvents: errorEvents } = useSWR("events", fetchEvents);
  const { dataProfile: errorProfile } = useSWR(
    "profileEvents",
    fetchTheProfile
  );

  React.useEffect(() => {
    fetchTheProfile();
    fetchEvents();
  }, []);

  React.useEffect(() => {
    setInterval(function () {
      fetchTheProfile();
    }, 100);
  }, []);

  async function fetchTheProfile() {
    const data = await supabase.auth.user();
    setStatus(data ? true : false);

    if (data && Cookies.get("whichroute")) {
      const coo = Cookies.get("whichroute");
      Cookies.remove("whichroute");
      router.push(coo);
    }
  }

  async function fetchEvents() {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .eq("type", 1);

    console.log("fetch events");
    if (data) {
      setEvents(data);
      setGotit(true);
    }

    if (error) {
      // alert("Some Error Occurred :(, Try again later");
      router.push("/home");
    }
  }

  async function logOut() {
    await supabase.auth.signOut();
    setStatus(false);
    router.reload(window.location.pathname);
  }

  return (
    <div
      style={{
        backgroundColor: c.c1,
        color: c.c2,
        backgroundImage: "url(/images/marathon.png)",
        backgroundPosition: m1 ? "center 100px" : "center 85px",
        backgroundSize: m1 ? "450px 450px" : "250px 250px",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        scrollBehavior: "smooth",
      }}
    >
      <NavBar code={0} logOut={logOut} status={status} />
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
            The marathon was one of the original modern Olympic events in 1896.
            In honor of this legendary sport National Institute of Engineering
            conducts Marathon every year as part of techNIEks techno- cultural
            fest. The marathon is usually conducted for a cause (last year data)
            and this year its been conducted to empower the distressed women.
            Whatever proceeds we obtain from the marathon would be donated to
            Shaktidhama founded by Puneet Raj Kumar
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
            their skills to the fullest.After 3 long years the Cyclothon is back
            with full force and is being conducted on the same day as the
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

      <TicketsUI events={events} status={status} />
      {events.length > 0 ? null : (
        <div
          style={{ display: "flex", justifyContent: "center", height: "500px" }}
        >
          <h1
            style={{ paddingTop: m1 ? "200px" : "60px", textAlign: "center" }}
          >
            {gotit ? "No Events" : "Loading..."}
          </h1>
        </div>
      )}
      {events.length > 0 ? null : <div style={{ height: "130px" }}></div>}
      <Footer />
    </div>
  );
}