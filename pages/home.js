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
import { useRouter } from "next/router";
import { init } from "aos";
import { destroyCookie } from "nookies";
import Cookies from "js-cookie";

gsap.registerPlugin(ScrollTrigger);

export default function Home(props) {
  const [status, setStatus] = React.useState(false);
  const m1 = useMediaQuery("(min-width:600px)");
  const router = useRouter();

  const { profileCacheHome, errorProfileCacheHome } = useSWR(
    "profileHome",
    fetchTheProfile
  );

  async function fetchTheProfile() {
    const data = await supabase.auth.user();

    setStatus(data ? true : false);
  }

  async function logOut() {
    const initialize = async () => await supabase.auth.signOut();
    initialize();

    setStatus(false);
    router.reload(window.location.pathname);
  }

  return (
    <div
      style={{
        backgroundColor: "#000000",
        color: "white",
        minWidth: "100%",
        backgroundImage: "url(/images/deepa.png)",
        backgroundPosition: m1 ? "center 80px" : "center 100px",
        backgroundSize: m1 ? "442px 499px" : "260px 293px",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        scrollBehavior: "smooth",
      }}
    >
      <NavBar code={0} logOut={logOut} status={status} />
      <div
        style={{
          height: m1 ? "40px" : "-50px",
          marginTop: m1 ? "0px" : "-50px",
        }}
      ></div>
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
