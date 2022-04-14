import SHeader from "../components/headers/Slides";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Body from "../components/body/Body";
import { supabase } from "../utils/SupabaseClient";
import React from "react";
import Router from "next/router";

export default function Home(props) {
  const [status, setStatus] = React.useState(false);

  React.useEffect(() => {
    // const { data: authListener } = supabase.auth.onAuthStateChange(
    //   (event, session) => {
    //     LoginChangeHandler(event, session);

    //     if (event === "SIGNED_IN") {
    //       setStatus(true);
    //       Router.push("/events");
    //     }
    //     if (event === "SIGNED_OUT") {
    //       setStatus(false);
    //       Router.push("/home");
    //     }
    //   }
    // );
    // checkUser();
    Router.push("/redirect2");
    // return () => {
    //   authListener.unsubscribe();
    // };
    //
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
  // async function fetchTheProfile() {
  //   const data = await supabase.auth.user();

  //   setStatus(data ? true : false);
  // }

  async function logOut() {
    await supabase.auth.signOut();
    setStatus(false);
  }

  return (
    <div>
      <NavBar code={0} logOut={logOut} status={status} />
      <SHeader />
      <Body />
      <div style={{ height: "100px" }}></div>
      <Footer />
    </div>
  );
}
