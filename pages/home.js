import SHeader from "../components/headers/Rangoli";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer3";
import useMediaQuery from "@mui/material/useMediaQuery";
import { supabase } from "../utils/SupabaseClient";
import React from "react";
import useSWR from "swr";

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
      style={{ backgroundColor: "#000000", color: "white", minWidth: "100%" }}
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
      <div style={{ height: m1 ? "20px" : "0px" }}></div>
      <Footer />
    </div>
  );
}
