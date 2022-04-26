import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { supabase } from "../utils/SupabaseClient";
import React from "react";
import TicketsUI from "../components/booking/Tickets";
import { useRouter } from "next/router";
import useSWR from "swr";
import * as c from "../utils/Colors";

export default function Contact() {
  const m1 = useMediaQuery("(min-width:600px)");
  const [status, setStatus] = React.useState(false);

  const router = useRouter();

  const { dataProfile: errorProfile } = useSWR(
    "profileEvents",
    fetchTheProfile
  );

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
        backgroundColor: c.c1,
        color: c.c2,
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
      <div style={{ height: "10px" }}></div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1
          style={{
            textAlight: "center",
            fontSize: m1 ? "50px" : "35px",
            color: c.c2,
            fontFamily: "Bungee",
          }}
        >
          Contact Us
        </h1>
      </div>
      <br />
      <p style={{ textAlign: "center" }}>Illi Design madu maccha</p>
      <Footer />
    </div>
  );
}
