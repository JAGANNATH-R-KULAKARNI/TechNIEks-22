import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { supabase } from "../utils/SupabaseClient";
import React from "react";
import { useRouter } from "next/router";
import MyTicketsUI from "../components/tickets/MyTickets2";
import useSWR from "swr";
import Skeleton from "@mui/material/Skeleton";
import * as c from "../utils/Colors";
import useMediaQuery from "@mui/material/useMediaQuery";
import ButtonUI from "../components/Button2";
import SnackbarContent from "@mui/material/SnackbarContent";

export default function Ticket() {
  const [status, setStatus] = React.useState(false);
  const [tickets, setTickets] = React.useState([]);
  const [tickets2, setTickets2] = React.useState([]);
  const [gotit, setGotit] = React.useState(false);
  const [thisCollege, setThisCollege] = React.useState(false);
  const [idbro, setIDBro] = React.useState("");
  const [payment_id, setPaymentId] = React.useState("");
  const [phnum, setPhnum] = React.useState("");

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

  React.useEffect(() => {
    // setInterval(function () {
    fetchTheProfile();
    // }, 100);
  }, []);

  async function filterTheTicket() {
    if (tickets.length == 0) return;

    const temp = [];
    // const ID = whatisthis == "ID" ? spec : idbro;
    // const PAY = whatisthis == "PAY" ? spec : payment_id;
    // const NUM = whatisthis == "NUM" ? spec : phnum;
    const ID = idbro;
    const PAY = payment_id;
    const NUM = phnum;

    if (ID.length == 0 && PAY.length == 0 && NUM.length == 0) {
      setTickets2([]);
      return;
    }

    for (var i = 0; i < tickets.length; i++) {
      let status_id =
        ID.length == 0 ? true : tickets[i].id == ID ? true : false;
      let status_pay =
        PAY.length == 0 ? true : tickets[i].payment_id == PAY ? true : false;

      let status_phnum =
        NUM.length == 0 ? true : tickets[i].phno == NUM ? true : false;

      if (status_id && status_pay && status_phnum) {
        temp.push(tickets[i]);
      }
    }

    setTickets2(temp);
  }

  async function fetchTickets() {
    const userData = await supabase.auth.user();

    if (userData) {
      if (userData.email != "technieks2022@gmail.com") {
        router.push("/events");
      }

      const { data, error } = await supabase
        .from("payments")
        .select(`*,events(*)`)
        // .eq("email", userData.email)
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
        // backgroundImage: "url(/images/logo3.png)",
        backgroundPosition: m1 ? "center 80px" : "center 85px",
        backgroundSize: m1 ? "450px 450px" : "250px 250px",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        scrollBehavior: "smooth",
      }}
    >
      <NavBar code={0} logOut={logOut} status={status} />

      {tickets.length > 0 ? (
        <MyTicketsUI
          tickets={tickets2}
          thisCollege={thisCollege}
          idbro={idbro}
          setIDBro={setIDBro}
          phnum={phnum}
          setPhnum={setPhnum}
          payment_id={payment_id}
          setPaymentId={setPaymentId}
          filterTheTicket={filterTheTicket}
        />
      ) : null}

      {tickets2.length > 0 ? null : (
        <div
          style={{ display: "flex", justifyContent: "center", height: "100px" }}
        >
          <h3
            style={{
              textAlign: "center",
              marginTop: m1 ? "0px" : "-50px",
              paddingLeft: "10%",
              paddingRight: "10%",
            }}
          >
            {gotit ? "No Matching Ticket :(" : "Loading..."}
          </h3>
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
      ></div>
      <br />

      {tickets2.length > 0 ? null : (
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
