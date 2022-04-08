import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { supabase } from "../utils/SupabaseClient";
import React from "react";
import { useRouter } from "next/router";
import MyTicketsUI from "../components/tickets/MyTickets";

export default function Ticket() {
  const m1 = useMediaQuery("(min-width:600px)");
  const [status, setStatus] = React.useState(false);
  const [tickets, setTickets] = React.useState([]);
  const router = useRouter();

  React.useEffect(() => {
    fetchTheProfile();
    fetchTickets();
  }, []);

  async function fetchTickets() {
    const userData = await supabase.auth.user();

    if (userData) {
      const { data, error } = await supabase
        .from("payments")
        .select(`*,events(*)`)
        .eq("email", userData.email);

      if (data) {
        console.log("tickets here");
        console.log(data);
        setTickets(data);
      }

      if (error) {
        console.log("its an error");
        console.log(error);
      }
    }
  }

  async function fetchTheProfile() {
    const data = await supabase.auth.user();

    setStatus(data ? true : false);

    if (!data) {
      router.push("/who_r_u");
    }
  }

  async function logOut() {
    await supabase.auth.signOut();
    setStatus(false);
    router.push("/who_r_u");
  }

  return (
    <div>
      <NavBar code={0} logOut={logOut} status={status} />
      <MyTicketsUI tickets={tickets} />
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
