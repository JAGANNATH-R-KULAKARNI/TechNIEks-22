import NavBar from "../components/NavBar";
import Footer from "../components/Footer3";
import useMediaQuery from "@mui/material/useMediaQuery";
import { supabase } from "../utils/SupabaseClient";
import React from "react";
import { useRouter } from "next/router";

export default function About() {
  const [status, setStatus] = React.useState(false);
  const m1 = useMediaQuery("(min-width:600px)");
  const router = useRouter();

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
    >
      <NavBar code={0} logOut={logOut} status={status} />
      <div style={{ marginTop: m1 ? "34%" : "100%" }}></div>
      <Footer />
    </div>
  );
}
