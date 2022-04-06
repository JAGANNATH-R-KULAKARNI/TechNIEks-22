import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { supabase } from "../utils/SupabaseClient";
import React from "react";
import TicketsUI from "../components/booking/Tickets";
import { useRouter } from "next/router";

export default function About() {
  const m1 = useMediaQuery("(min-width:600px)");
  const [status, setStatus] = React.useState(false);
  const [events, setEvents] = React.useState([]);
  const router = useRouter();

  React.useEffect(() => {
    fetchTheProfile();
    fetchEvents();
  }, []);

  async function fetchTheProfile() {
    const data = await supabase.auth.user();
    setStatus(data ? true : false);
  }

  async function fetchEvents() {
    const { data, error } = await supabase.from("events").select("*");

    if (data) {
      console.log("data - events");
      console.log(data);
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
      <Footer />
    </div>
  );
}
