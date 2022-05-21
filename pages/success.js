import * as React from "react";
import { withRouter } from "next/router";
import styles from "../styles/Success.module.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
import Button from "@mui/material/Button";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import * as c from "../utils/Colors";
import { useRouter } from "next/router";
import { supabase } from "../utils/SupabaseClient";
import useSWR from "swr";
import copy from "copy-to-clipboard";
import ButtonGroup from "@mui/material/ButtonGroup";

const shirtsType = {
  S: "Small",
  M: "Medium",
  L: "Large",
  XL: "X Large",
  XLL: "XX Large",
  XLLL: "XXX Large",
};

function Success(props) {
  const m1 = useMediaQuery("(min-width:450px)");
  const router = useRouter();
  const { profileCacheSuccess, errorProfileCacheSuccess } = useSWR(
    "profileSuccess",
    fetchTheProfile
  );

  const [status, setStatus] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const [ticket, setTicket] = React.useState(null);

  React.useEffect(() => {
    // fetchTheProfile();

    if (!props.router.query.status) {
      // router.push("/home");
    }
  }, []);

  React.useEffect(() => {
    setInterval(function () {
      fetchTheProfile();
      fetchTickets();
    }, 500);
  }, []);

  async function fetchTheProfile() {
    const data = await supabase.auth.user();

    setStatus(data ? true : false);
  }

  async function fetchTickets() {
    if (!props.router.query.pay_id) return;

    const userData = await supabase.auth.user();

    if (userData) {
      const { data, error } = await supabase
        .from("payments")
        .select(`*,events(*)`)
        .eq("payment_id", props.router.query.pay_id);
      // .order("created_at", { ascending: false });

      if (data) {
        // setTickets(data);
        // setGotit(true);
        // console.log("tickets");
        // console.log(props.router.query.pay_id);
        // console.log(data);
        setTicket(data[0]);
      }

      if (error) {
        router.push("/ticket");
      }
    }
  }

  async function logOut() {
    await supabase.auth.signOut();
    setStatus(false);
    router.push("/ticket");
  }

  return (
    <div
      id="success"
      style={{
        backgroundColor: "#000000",
        color: "white",
        minWidth: "100%",
        // backgroundImage: "url(/images/logo.png)",
        // backgroundPosition: m1 ? "center 80px" : "center 85px",
        // backgroundSize: m1 ? "450px 450px" : "250px 250px",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        scrollBehavior: "smooth",
      }}
    >
      <Navbar code={0} logOut={logOut} status={status} />
      <Box
        style={{
          textAlign: "center",
          paddingTop: "1%",
        }}
      >
        <div
          // elevation={0}
          style={{
            width: m1 ? "400px" : "80%",
            height: "100%",
            margin: "auto",
            // backgroundColor: "#000000",
            color: "white",
            fontFamily: "Bungee",
          }}
        >
          <br />
          <h1 style={{ fontFamily: "Bungee" }}>Payment Successful</h1>
          <svg
            className={styles.checkmark}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className={styles.checkmark__circle}
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className={styles.checkmark__check}
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
          <Button
            variant="contained"
            style={{ backgroundColor: c.c3, fontFamily: "Bungee" }}
          >
            <Link href="/ticket"> Print The Ticket</Link>
          </Button>
          <br />
          <br />

          {ticket ? (
            <ButtonGroup
              disableElevation
              variant="contained"
              style={{ width: "170px" }}
            >
              {props.router.query.type == 1 ? (
                <Button
                  style={{
                    width: props.router.query.type == 1 ? "85px" : "0px",
                    backgroundColor: "black",
                    color: "white",
                    border: "1px solid white",
                    fontSize: "10px",
                  }}
                  onClick={() => {
                    copy(props.router.query.phno);
                    setCopied(true);

                    setTimeout(() => {
                      setCopied(false);
                    }, 1000);
                  }}
                >
                  Phnum
                </Button>
              ) : null}
              <Button
                style={{
                  width: props.router.query.type == 1 ? "85px" : "170px",
                  backgroundColor: "black",
                  color: "white",
                  border: "1px solid white",
                  fontSize: "10px",
                }}
                onClick={() => {
                  const textbro =
                    props.router.query.type == 1
                      ? `------ ID : ${ticket.id} ------
ನಮಸ್ಕಾರಗಳು,ಟೆಕ್ ನೀಕ್ಸ್-22 ಗೆ ಸುಸ್ವಾಗತ,
ನಿಮ್ಮ "${ticket.events.name}" ನ ಟಿಕೆಟ್ ದೃಢೀಕರಿಸಲಾಗಿದೆ.
ನಿಮ್ಮ ಒಂದು ಟಿಕೆಟಿನ ಮೊತ್ತ - "₹${ticket.amountpaid}".
Name: ${ticket.name}
Ph No: ${ticket.phno}
Payment_ID: ${ticket.payment_id}
Ticket_ID: ${ticket.order_id}
Size : ${
                          props.router.query.type == 1
                            ? shirtsType[props.shirt]
                            : "Not Applicable"
                        }
Category : ${ticket.category}
ದಯವಿಟ್ಟು "event" ಗೆ ಆಗಮಿಸಿ, ಈ ಸಂಭ್ರಮವನ್ನು ಯಶಸ್ವಿ ಗೊಳಿಸಬೇಕಾಗಿ ಕೋರಿ ಕೊಳ್ಳುತ್ತೇವೆ.`
                      : `------ ID : ${ticket.id} ------
ನಮಸ್ಕಾರಗಳು,ಟೆಕ್ ನೀಕ್ಸ್-22 ಗೆ ಸುಸ್ವಾಗತ,
ನಿಮ್ಮ "${ticket.events.name}" ನ ಟಿಕೆಟ್ ದೃಢೀಕರಿಸಲಾಗಿದೆ.
ನಿಮ್ಮ ಒಂದು ಟಿಕೆಟಿನ ಮೊತ್ತ - "₹${ticket.amountpaid}".
Name: ${ticket.name}
Payment_ID: ${ticket.payment_id}
Ticket_ID: ${ticket.order_id}
ದಯವಿಟ್ಟು "event" ಗೆ ಆಗಮಿಸಿ, ಈ ಸಂಭ್ರಮವನ್ನು ಯಶಸ್ವಿ ಗೊಳಿಸಬೇಕಾಗಿ ಕೋರಿ ಕೊಳ್ಳುತ್ತೇವೆ.`;

                  copy(textbro);
                  setCopied(true);

                  setTimeout(() => {
                    setCopied(false);
                  }, 1000);
                }}
              >
                Invititation
              </Button>
            </ButtonGroup>
          ) : null}
          <br />
          <div style={{ height: "10px" }}></div>
          {copied ? <div style={{ height: "0px" }}>copied</div> : null}
        </div>
      </Box>
      <br />
      <br />
      {!m1 ? (
        <div>
          <br />
          <br />
          <br />
          <br />
        </div>
      ) : null}
      <Footer />
    </div>
  );
}

export default withRouter(Success);
