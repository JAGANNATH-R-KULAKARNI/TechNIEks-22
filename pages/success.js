import * as React from "react";
import { withRouter } from "next/router";
import styles from "../styles/Success.module.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import useMediaQuery from "@mui/material/useMediaQuery";
import Alert from "@mui/material/Alert";
import Link from "next/link";
import Button from "@mui/material/Button";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import InfoIcon from "@mui/icons-material/Info";
import { useEffect } from "react";
import * as c from "../utils/Colors";
import { useRouter } from "next/router";
import { supabase } from "../utils/SupabaseClient";

function Success(props) {
  const matches = useMediaQuery("(min-width:450px)");
  const router = useRouter();

  const [status, setStatus] = React.useState(false);

  React.useEffect(() => {
    fetchTheProfile();

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
  }

  return (
    <div id="success">
      <Navbar code={0} logOut={logOut} status={status} />
      <Box style={{ textAlign: "center", paddingTop: "1%" }}>
        <Paper
          elevation={0}
          style={{
            width: matches ? "400px" : "80%",
            height: "100%",
            margin: "auto",
          }}
        >
          <br />
          <h1>Payment Successful</h1>
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

          <Button variant="contained" style={{ backgroundColor: c.c3 }}>
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

export default withRouter(Success);
