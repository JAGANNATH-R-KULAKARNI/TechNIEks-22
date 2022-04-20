import * as React from "react";
import { withRouter } from "next/router";
import styles from "../styles/Failure.module.css";
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

function Failure(props) {
  const matches = useMediaQuery("(min-width:450px)");
  const router = useRouter();
  const [status, setStatus] = React.useState(false);
  const { profileCacheFailure, errorProfileCacheFailure } = useSWR(
    "profileFailure",
    fetchTheProfile
  );

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
      id="failure"
      style={{
        backgroundColor: "#000000",
        color: "white",
       backgroundImage: "url(" + "/images/heart.gif" + ")",
        backgroundPosition: "center 50px",
        backgroundSize: m1 ? "300px 500px" : "300px 500px",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        scrollBehavior: "smooth",
      }}
    >
      <Navbar code={0} logOut={logOut} status={status} />
      <Box style={{ textAlign: "center", paddingTop: "1%" }}>
        <Paper
          elevation={0}
          style={{
            width: matches ? "400px" : "80%",
            height: "100%",
            margin: "auto",
            backgroundColor: "#000000",
            color: "white",
          }}
        >
          <br />
          <h1 style={{ fontFamily: "Bungee" }}>Payment Unsuccessful</h1>
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
              d="M16 16 36 36 M36 16 16 36"
            />
          </svg>

          <Button
            variant="contained"
            style={{ backgroundColor: c.c4, fontFamily: "Bungee" }}
          >
            <Link href="/events"> Continue</Link>
          </Button>
        </Paper>
      </Box>
      <br />
      <br />

      <Footer />
    </div>
  );
}

export default withRouter(Failure);
