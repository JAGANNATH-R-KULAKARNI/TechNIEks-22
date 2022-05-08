import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { supabase } from "../utils/SupabaseClient";
import React from "react";
import TicketsUI from "../components/booking/Tickets";
import { useRouter } from "next/router";
import BokingUI from "../components/booking/Boking";

import useSWR from "swr";
import * as c from "../utils/Colors";

export default function Contact() {
  const m1 = useMediaQuery("(min-width:600px)");
  const [status, setStatus] = React.useState(false);

 
const [ticket, setTicket] = React.useState(null);
const [email, setEmail] = React.useState(null);
const [openAlert, setOpenAlert] = React.useState(false);
const [alertType, setAlertType] = React.useState("success");
const [alertMsg, setAlert] = React.useState(null);


const [name, setName] = React.useState("");
const [usn, setUSN] = React.useState("");
const [ID, setID] = React.useState("pay_****");
const [chat, setchat] = React.useState("");
const [totalAmount, setTotalAmount] = React.useState();
const [successTab, setSuccessTab] = React.useState(false);

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
        backgroundImage: "url(" + "/images/back.jpg" + ")",
        backgroundPosition: "center",
        backgroundSize: "700px 500px",
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
      <BokingUI

name={name}
usn={usn}
ID={ID}
email={email}
chat={chat}
totalAmount={totalAmount}
setName={setName}
setUsn={setUSN}
setID={setID}
setchat={setchat}



/>
     
      <Footer />
    </div>
  );
}
