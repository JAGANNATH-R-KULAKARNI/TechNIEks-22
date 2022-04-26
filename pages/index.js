import SHeader from "../components/headers/Rangoli";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer3";
import useMediaQuery from "@mui/material/useMediaQuery";
import Body from "../components/body/Body";
import { supabase } from "../utils/SupabaseClient";
import React from "react";
import useSWR from "swr";
import styles from "../styles/Flies.module.css";
import { useRouter } from "next/router";
import Router from "next/router";

export default function Home(props) {
  const [status, setStatus] = React.useState(false);
  const m1 = useMediaQuery("(min-width:600px)");
  const router = useRouter();

  React.useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        LoginChangeHandler(event, session);

        if (event === "SIGNED_IN") {
          setStatus(true);
          Router.push("/events");
        }
        if (event === "SIGNED_OUT") {
          setStatus(false);
          Router.push("/home");
        }
      }
    );
    checkUser();
    Router.push("/home");
    fetchTheProfile();
    return () => {
      authListener.unsubscribe();
    };
  }, []);
  async function checkUser() {
    const user = await supabase.auth.user();
    if (user) {
      setStatus(true);
      return;
    }

    setStatus(false);
  }

  async function LoginChangeHandler(event, session) {
    await fetch("/api/auth", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "same-origin",
      body: JSON.stringify({ event, session }),
    })
      .then((u) => {
        checkUser();
      })
      .catch((u) => {
        checkUser();
      });
  }
  async function fetchTheProfile() {
    const data = await supabase.auth.user();

    setStatus(data ? true : false);
  }

  async function logOut() {
    await supabase.auth.signOut();
    setStatus(false);
    router.reload(window.location.pathname);
  }

  return (
    <div
      style={{
        backgroundColor: "#000000",
        color: "white",
        backgroundImage:
          "url(" +
          "https://render.fineartamerica.com/images/rendered/default/print/6/8/break/images/artworkimages/medium/2/a-traditional-south-indian-lamp-by-chandrachoodan-gopalakrishnan.jpg" +
          ")",
        backgroundPosition: m1 ? "center 50px" : "center 80px",
        backgroundSize: m1 ? "445px 600px" : "260px 350px",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        scrollBehavior: "smooth",
      }}
      // className="w3-xlarge font-effect-shadow-multiple"
    >
      <NavBar code={0} logOut={logOut} status={status} />
      <div style={{ height: m1 ? "100px" : "40px" }}></div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div style={{ mwidth: "25%" }}></div>
        <div style={{ maxWidth: "50%" }}>
          <SHeader />
        </div>
        <div style={{ mwidth: "25%" }}></div>
      </div>
      {/* <Body /> */}
      <div style={{ height: m1 ? "20px" : "0px" }}></div>
      <Footer />
    </div>
  );
}
