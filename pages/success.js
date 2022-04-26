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

function Success(props) {
  const m1 = useMediaQuery("(min-width:450px)");
  const router = useRouter();
  const { profileCacheSuccess, errorProfileCacheSuccess } = useSWR(
    "profileSuccess",
    fetchTheProfile
  );

  const [status, setStatus] = React.useState(false);

  React.useEffect(() => {
    // fetchTheProfile();

    if (!props.router.query.status) {
      router.push("/home");
    }
  }, []);

  async function fetchTheProfile() {
    const data = await supabase.auth.user();

    setStatus(data ? true : false);
  }

  async function logOut() {
    await supabase.auth.signOut();
    setStatus(false);
    router.push("/home");
  }

  return (
    <div
      id="success"
      style={{
        backgroundColor: "#000000",
        color: "white",
        minWidth: "100%",
        backgroundImage: "url(/images/deepa2.png)",
        backgroundPosition: m1 ? "center 80px" : "center 100px",
        backgroundSize: m1 ? "442px 499px" : "260px 293px",
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
