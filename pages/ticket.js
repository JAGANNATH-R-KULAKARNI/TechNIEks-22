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
import ButtonUI from "../components/Button3";
import SnackbarContent from "@mui/material/SnackbarContent";

export default function Ticket() {
  const [status, setStatus] = React.useState(false);
  const [tickets, setTickets] = React.useState([]);
  const [gotit, setGotit] = React.useState(false);
  const [thisCollege, setThisCollege] = React.useState(false);

  const router = useRouter();
  const m1 = useMediaQuery("(min-width:600px)");
  const action = (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginLeft: m1 ? "0px" : "-5%",
        paddingBottom: m1 ? "0px" : "10px",
      }}
    >
      <a
        href="https://forms.gle/WKNV2sCTZDhpr2TC7"
        target="_blank"
        rel="noreferrer"
      >
        <ButtonUI text="Contact Us" />
      </a>
    </div>
  );

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
    // setInterval(function () {
    fetchTheProfile();
    // }, 100);
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
          style={{ display: "flex", justifyContent: "center", height: "100px" }}
        >
          <h1 style={{ textAlign: "center", marginTop: m1 ? "0px" : "-50px" }}>
            {gotit ? "No Tickets" : "Loading..."}
          </h1>
        </div>
      )}
      {/* <br /> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: m1 ? "0%" : "10%",
          paddingRight: m1 ? "0%" : "10%",
          marginTop: m1 ? "0px" : "-30px",
        }}
      >
        <SnackbarContent
          message={
            <h6>
              {" "}
              If you have done the payment, but still the ticket is not
              generated then
            </h6>
          }
          action={action}
          style={{ maxWidth: m1 ? "60%" : "100%", borderRadius: "30px" }}
        />
      </div>
      <br />

      <br />
      <br />
      <br />
      <br />
      {tickets.length > 0 ? null : (
        <div
          style={{
            height: m1 ? "30px" : "0px",
            marginTop: m1 ? "0px" : "-70px",
          }}
        ></div>
      )}
      <Footer />
    </div>
  );
}

// export async function getServerSideProps({ req }) {
//   const { user } = await supabase.auth.api.getUserByCookie(req);

//   if (!user) {
//     return { props: {}, redirect: { destination: "/who_r_u" } };
//   }

//   return { props: { user } };
// }
