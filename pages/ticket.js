import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { supabase } from "../utils/SupabaseClient";
import React from "react";
import { useRouter } from "next/router";
import MyTicketsUI from "../components/tickets/MyTickets";
import useSWR from "swr";
import Skeleton from "@mui/material/Skeleton";
import * as c from "../utils/Colors";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Ticket() {
  const [status, setStatus] = React.useState(false);
  const [tickets, setTickets] = React.useState([]);
  const [gotit, setGotit] = React.useState(false);
  const [thisCollege, setThisCollege] = React.useState(false);

  const router = useRouter();
  const m1 = useMediaQuery("(min-width:600px)");

  const { ticketCache, errorCache } = useSWR("payments", fetchTickets);
  const { profileCache, errorProfileCache } = useSWR(
    "profile",
    fetchTheProfile
  );
  // React.useEffect(() => {
  //   fetchTheProfile();
  //   fetchTickets();
  // }, []);
  React.useEffect(() => {
    setInterval(function () {
      fetchTheProfile();
    }, 100);
  }, []);

  async function fetchTickets() {
    const userData = await supabase.auth.user();

    if (userData) {
      const { data, error } = await supabase
        .from("payments")
        .select(`*,events(*)`)
        .eq("email", userData.email)
        .order("created_at", { ascending: false });

      if (data) {
        setTickets(data);
        setGotit(true);
      }

      if (error) {
        setGotit(true);
      }
    }
  }

  async function fetchTheProfile() {
    const data = await supabase.auth.user();

    setStatus(data ? true : false);

    if (!data) {
      router.push("/who_r_u");
    }

    if (data) {
      if (/nie.ac.in$/.test(data.email)) {
        setThisCollege(true);
      } else {
        setThisCollege(false);
      }
    }
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

      <MyTicketsUI tickets={tickets} thisCollege={thisCollege} />

      {tickets.length > 0 ? null : (
        <div
          style={{ display: "flex", justifyContent: "center", height: "500px" }}
        >
          <h1 style={{ paddingTop: m1 ? "0px" : "60px", textAlign: "center" }}>
            {gotit ? "No Tickets" : "Loading..."}
          </h1>
        </div>
      )}
      {tickets.length > 0 ? null : <div style={{ height: "130px" }}></div>}
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (!user) {
    return { props: {}, redirect: { destination: "/who_r_u" } };
  }

  return { props: { user } };
}
