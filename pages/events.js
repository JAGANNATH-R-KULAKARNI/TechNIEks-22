import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { supabase } from "../utils/SupabaseClient";
import React from "react";
import TicketsUI from "../components/booking/Tickets";
import { useRouter } from "next/router";
import useSWR from "swr";
import * as c from "../utils/Colors";
import Cookies from "js-cookie";

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
    const { data, error } = await supabase.from("events").select("*");
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
        backgroundImage: "url(/images/deepa2.png)",
        backgroundPosition: m1 ? "center 80px" : "center 100px",
        backgroundSize: m1 ? "442px 499px" : "260px 293px",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        scrollBehavior: "smooth",
      }}
    >
      <NavBar code={0} logOut={logOut} status={status} />
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
