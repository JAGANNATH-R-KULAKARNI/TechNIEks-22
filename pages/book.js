import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { supabase } from "../utils/SupabaseClient";
import React from "react";
import { useRouter } from "next/router";
import BookingUI from "../components/booking/Booking";
import { withRouter } from "next/router";

function BookTicket(props) {
  const m1 = useMediaQuery("(min-width:600px)");
  const [status, setStatus] = React.useState(false);
  const [ticket, setTicket] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const router = useRouter();

  const [name, setName] = React.useState("");
  const [usn, setUSN] = React.useState("");
  const [no, setNo] = React.useState(1);
  const [enjoy, setEnjoy] = React.useState(false);
  const [totalAmount, setTotalAmount] = React.useState();

  React.useEffect(() => {
    fetchTheProfile();
    fetchTicketDetails();
  }, []);

  async function fetchTicketDetails() {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .eq("id", props.router.query.id);

    if (data) {
      console.log("ticket");
      console.log(data);
      setTicket(data[0]);
      setTotalAmount(data[0].price * no);
    }

    if (error) {
      alert("Some Error Occurred :(, Try again later");
      router.push("/events");
    }
  }

  async function fetchTheProfile() {
    const data = await supabase.auth.user();

    setStatus(data ? true : false);

    if (data) {
      console.log("user details - book.js");
      console.log(data);
      setEmail(data.email);
    }

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
      <BookingUI
        ticket={ticket}
        name={name}
        usn={usn}
        no={no}
        email={email}
        enjoy={enjoy}
        totalAmount={totalAmount}
        setName={setName}
        setUsn={setUSN}
        setNo={setNo}
        setEnjoy={setEnjoy}
      />
      <Footer />
    </div>
  );
}

export default withRouter(BookTicket);

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (!user) {
    return { props: {}, redirect: { destination: "/who_r_u" } };
  }

  return { props: { user } };
}
