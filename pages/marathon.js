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
import ButtonUI from "../components/Button2";

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

  const routeToBook = () => {
    router.push("/sports");
  };

  React.useEffect(() => {
    fetchTheProfile();
    fetchEvents();
  }, []);

  React.useEffect(() => {
    setInterval(function () {
      fetchTheProfile();
    }, 100);
  }, []);

  const changeIt = () => {
    const ok = document.getElementById("marathon_page");

    if (ok) {
      var heightvro = window.scrollY;
      if (heightvro > 150)
        ok.style.backgroundImage = "url(/images/marathona2.png)";
      else ok.style.backgroundImage = "url(/images/marathona.png)";
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", changeIt);
    return () => window.removeEventListener("scroll", changeIt);
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
        backgroundImage: "url(/images/marathona.png)",
        backgroundPosition: m1 ? "center 100px" : "center 85px",
        backgroundSize: m1 ? "550px 550px" : "250px 250px",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        scrollBehavior: "smooth",
      }}
      id="marathon_page"
    >
      <NavBar code={0} logOut={logOut} status={status} />
      <div style={{ height: m1 ? "570px" : "250px" }}></div>
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
            Shaktidhama founded by Parvathamma Rajkumar and Dr Rajkumar
          </p>
        </div>
      </div>
      <div className={styles.contents_why}>
        {!m1 ? (
          <div className={styles.img_conatiner} style={{ marginTop: "-120px" }}>
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
            Run For Appu
          </h1>
          <br />
          <p
            style={{ lineHeight: 1.7, wordSpacing: "5px", textAlign: "center" }}
          >
            As you all know that beside being a great actor, he was a good
            runner and a hobbyist of cycling. In memory of him, let s make this
            Maracyclothon a great success. ಜೊತೆಗಿರದ ಜೀವ ಎಂದಿಗೂ ಜೀವಂತ...
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
      {/* <TicketsUI events={events} status={status} />
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
      {events.length > 0 ? null : <div style={{ height: "130px" }}></div>} */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ButtonUI text="Book Now" clicked={routeToBook} />
      <br />
      <br />
      <br />
      <br />
      {/* <br />
      <br />
      <br /> */}
      {m1 ? (
        <div>
          <br />
          <br /> <br />
        </div>
      ) : (
        <div></div>
      )}
      <Footer />
    </div>
  );
}
