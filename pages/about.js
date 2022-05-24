import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { supabase } from "../utils/SupabaseClient";
import React from "react";
import { useRouter } from "next/router";
import CouncilUI from "../components/Council";

export default function About() {
  const [status, setStatus] = React.useState(false);
  const m1 = useMediaQuery("(min-width:600px)");
  const router = useRouter();

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
    await supabase.auth.signOut();
    setStatus(false);
    router.reload(window.location.pathname);
  }

  return (
    <div
      style={{
        backgroundColor: "#000000",
        color: "white",
        backgroundImage: "url(/images/logo3.png)",
        backgroundPosition: m1 ? "center 80px" : "center 85px",
        backgroundSize: m1 ? "450px 450px" : "250px 250px",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        scrollBehavior: "smooth",
      }}
    >
      <NavBar code={0} logOut={logOut} status={status} />
      <div style={{ height: "10px" }}></div>
      <CouncilUI />
      <Footer />
    </div>
  );
}
