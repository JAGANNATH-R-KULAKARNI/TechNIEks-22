import NavBar from "../components/NavBar";
import Footer from "../components/Footer3";
import useMediaQuery from "@mui/material/useMediaQuery";
import { supabase } from "../utils/SupabaseClient";
import React from "react";

export default function About() {
  const [status, setStatus] = React.useState(false);

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

      <Footer />
    </div>
  );
}
