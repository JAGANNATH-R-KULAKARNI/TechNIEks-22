import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { supabase } from "../../utils/SupabaseClient";
import React from "react";
import styles from "../../styles/Creaters.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as c from "../../utils/Colors";

export default function Creaters() {
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
    <div style={{ backgroundColor: "#000000", color: "white" }}>
      <NavBar code={0} logOut={logOut} status={status} />
      <div style={{ height: "10px" }}></div>
      <h1
        style={{
          textAlign: "center",
          fontSize: m1 ? "50px" : "23px",
          color: c.c4,
          fontFamily: "Bungee",
        }}
      >
        Website Designers
      </h1>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="/images/jagannath.jpeg"
          style={{ width: "10%", minWidth: "10%", height: "auto" }}
        />
        <img
          src="/images/lohith.jpeg"
          style={{ width: "10%", height: "auto" }}
        />
        <img
          src="/images/vishakha.jpeg"
          style={{ width: "10%", height: "auto" }}
        />
        <img
          src="/images/prajwal.jpeg"
          style={{ width: "10%", height: "auto", borderRadius: "50%" }}
        />
        <img
          src="/images/prajwl.jpeg"
          alt="niraj"
          style={{ width: "10%", height: "auto", borderRadius: "50%" }}
        />
      </div>
      <div style={{ height: "120px" }}></div>
      <Footer />
    </div>
  );
}
