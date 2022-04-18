import SHeader from "../components/headers/Rangoli";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer3";
import useMediaQuery from "@mui/material/useMediaQuery";
import { supabase } from "../utils/SupabaseClient";
import React from "react";
import useSWR from "swr";
import Scroller from "../components/scroller";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home(props) {
  const [status, setStatus] = React.useState(false);
  const m1 = useMediaQuery("(min-width:600px)");

  const { profileCacheHome, errorProfileCacheHome } = useSWR(
    "profileHome",
    fetchTheProfile
  );

  async function fetchTheProfile() {
    const data = await supabase.auth.user();

    setStatus(data ? true : false);
  }

  async function logOut() {
    await supabase.auth.signOut();
    setStatus(false);
  }

  return (
    <div
      style={{
        backgroundColor: "#000000",
        color: "white",
        minWidth: "100%",
        backgroundImage: "url(" + "/images/back.jpg" + ")",
        backgroundPosition: "center",
        backgroundSize: m1 ? "700px 500px" : "700px 500px",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        scrollBehavior: "smooth",
      }}
    >
      <NavBar code={0} logOut={logOut} status={status} />
      <div style={{ height: m1 ? "40px" : "40px" }}></div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div style={{ miwidth: "25%" }}></div>
        <div style={{ maxWidth: "50%" }}></div>
        <div style={{ marginTop: m1 ? "30%" : "100%" }}></div>
        <div style={{ miwidth: "25%" }}></div>
      </div>
      <div style={{ height: m1 ? "20px" : "0px" }}></div>
      <Footer />
    </div>
  );
}
