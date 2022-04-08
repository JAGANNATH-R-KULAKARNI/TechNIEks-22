import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SHeader from "../components/headers/Slides";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer3";
import useMediaQuery from "@mui/material/useMediaQuery";
import Body from "../components/body/Body";
import { supabase } from "../utils/SupabaseClient";
import React from "react";
import Router from "next/router";

export default function Home(props) {
  const [status, setStatus] = React.useState(false);
  const m1 = useMediaQuery("(min-width:600px)");

  React.useEffect(() => {
    fetchTheProfile();
  }, []);

  async function fetchTheProfile() {
    const data = await supabase.auth.user();

    setStatus(data ? true : false);
  }

  async function logOut() {
    await supabase.auth.signOut();
    setStatus(false);
  }

  return (
    <div>
      <NavBar code={0} logOut={logOut} status={status} />
      <SHeader />
      <Body />
      <div style={{ height: m1 ? "100px" : "0PX" }}></div>
      <Footer />
    </div>
  );
}
