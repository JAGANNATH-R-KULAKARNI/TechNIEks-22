import NavBar from "../components/NavBar";
import Footer from "../components/Footer3";
import useMediaQuery from "@mui/material/useMediaQuery";
import { supabase } from "../utils/SupabaseClient";
import React from "react";
import useSWR from "swr";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";

gsap.registerPlugin(ScrollTrigger);

export default function Home(props) {
  const [status, setStatus] = React.useState(false);
  const m1 = useMediaQuery("(min-width:600px)");
  const router = useRouter();

  const { profileCacheHome, errorProfileCacheHome } = useSWR(
    "profileHome",
    fetchTheProfile
  );

  React.useEffect(() => {
    setInterval(function () {
      fetchTheProfile();
    }, 100);
  }, []);

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

  const changeLogo = () => {
    const ok = document.getElementById("benki");

    if (ok) {
      var heightvro = window.scrollY;
      if (heightvro > 550) ok.style.backgroundImage = "url(/images/logo3.png)";
      else ok.style.backgroundImage = "url(/images/aaa.gif)";
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", changeLogo);
    return () => window.removeEventListener("scroll", changeLogo);
  }, []);

  React.useEffect(() => {
    try {
      // setTimeout(() => {
      //   const ok = document.getElementById("benki");
      //   if (ok) ok.style.backgroundImage = "url(/images/logo.png)";
      // }, 10000);
    } catch (err) {
      console.log("scroll error home page");
    }
  }, []);
  return (
    <div
      style={{
        backgroundColor: "#000000",
        color: "white",
        minWidth: "100%",
        backgroundImage: "url(/images/aaa.gif)",
        backgroundPosition: m1 ? "center 65px" : "center 65px",
        backgroundSize: m1 ? "600px 600px" : "300px 300px",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        scrollBehavior: "smooth",
      }}
      id="benki"
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
