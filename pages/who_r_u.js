import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import useMediaQuery from "@mui/material/useMediaQuery";
import SignInUI from "../components/signin/SignIn2";
import React from "react";
import useSWR from "swr";
import { supabase } from "../utils/SupabaseClient";
import { useRouter } from "next/router";

export default function WhoRU() {
  const m1 = useMediaQuery("(min-width:600px)");
  const router = useRouter();

  const { whoruProfile: whoruerrorProfile } = useSWR(
    "profileWhoRu",
    fetchTheProfile
  );

  async function fetchTheProfile() {
    const data = await supabase.auth.user();

    if (data) {
      router.push("/home");
    }
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
      <NavBar code={1} />
      <div style={{ marginTop: !m1 ? "-20px" : "100px" }}>
        <SignInUI />
      </div>
      <div style={{ height: "50px" }}></div>
      <Footer />
    </div>
  );
}
