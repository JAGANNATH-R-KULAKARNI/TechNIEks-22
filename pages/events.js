import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { supabase } from "../utils/SupabaseClient";
import React from "react";
import TicketsUI from "../components/booking/Tickets";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function About() {
  const m1 = useMediaQuery("(min-width:600px)");
  const [status, setStatus] = React.useState(false);
  const [events, setEvents] = React.useState([]);
  const router = useRouter();
  const { dataEvents: errorEvents } = useSWR("events", fetchEvents);
  const { dataProfile: errorProfile } = useSWR(
    "profileEvents",
    fetchTheProfile
  );

  // React.useEffect(() => {
  //   fetchTheProfile();
  //   fetchEvents();
  // }, []);

  async function fetchTheProfile() {
    const data = await supabase.auth.user();
    setStatus(data ? true : false);
  }

  async function fetchEvents() {
    const { data, error } = await supabase.from("events").select("*");
    console.log("fetch events");
    if (data) {
      setEvents(data);
    }

    if (error) {
      alert("Some Error Occurred :(, Try again later");
      router.push("/home");
    }
  }

  async function logOut() {
    await supabase.auth.signOut();
    setStatus(false);
  }

  return (
    <div>
      <NavBar code={0} logOut={logOut} status={status} />
      <TicketsUI events={events} />
      {events.length > 0 ? null : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            style={{ width: "50%", height: "auto" }}
            src="https://shop.myfelt-europe.com/skin/frontend/rwd/myfelt-2018/images/cart-noitem-mobile.gif"
          />
        </div>
      )}
      {events.length > 0 ? null : <div style={{ height: "130px" }}></div>}
      <Footer />
    </div>
  );
}
