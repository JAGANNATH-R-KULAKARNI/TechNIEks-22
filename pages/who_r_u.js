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

  // React.useEffect(() => {
  //   setInterval(function () {
  //     fetchTheProfile();
  //   }, 100);
  // }, []);

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
        backgroundImage: "url(/images/deepa2.png)",
        backgroundPosition: m1 ? "center 80px" : "center 100px",
        backgroundSize: m1 ? "442px 499px" : "260px 293px",
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
