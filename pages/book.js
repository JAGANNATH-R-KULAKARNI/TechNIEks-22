import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { supabase } from "../utils/SupabaseClient";
import React from "react";
import { useRouter } from "next/router";
import BookingUI from "../components/booking/Booking";
import { withRouter } from "next/router";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import useSWR from "swr";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function BookTicket(props) {
  const m1 = useMediaQuery("(min-width:600px)");
  const [status, setStatus] = React.useState(false);
  const [ticket, setTicket] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [openAlert, setOpenAlert] = React.useState(false);
  const [alertType, setAlertType] = React.useState("success");
  const [alertMsg, setAlert] = React.useState(null);
  const router = useRouter();

  const [name, setName] = React.useState("");
  const [usn, setUSN] = React.useState("");
  const [no, setNo] = React.useState(1);
  const [enjoy, setEnjoy] = React.useState(false);
  const [totalAmount, setTotalAmount] = React.useState();

  const { dataEvents: errorEvents } = useSWR("eventBook", fetchTicketDetails);
  const { dataProfile: errorProfile } = useSWR("profileBook", fetchTheProfile);

  const messageAlert = async (msg, type, t) => {
    setOpenAlert(true);
    setAlert(msg);
    setAlertType(type);
    setTimeout(() => {
      setOpenAlert(false);
      setAlert(null);
    }, t);
    return;
  };

  // React.useEffect(() => {
  //   fetchTheProfile();
  //   fetchTicketDetails();
  // }, []);

  async function fetchTicketDetails() {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .eq("id", props.router.query.id);

    if (data) {
      setTicket(data[0]);
      setTotalAmount(data[0].price * no);
    }

    if (error) {
      messageAlert("Some Error Occurred :(, Try again later", "error", 4000);
      router.push("/events");
    }
  }

  async function messageAlertForPayments(code) {
    if (code) messageAlert("Loading.....", "success", 1000000);
    else {
      setOpenAlert(false);
      setAlert(null);
    }
  }

  async function fetchTheProfile() {
    const data = await supabase.auth.user();

    setStatus(data ? true : false);

    if (data) {
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
    <div
      style={{
        backgroundColor: "#000000",
        color: "white",
        minWidth: "100%",
        backgroundImage: "url(" + "/images/back.jpg" + ")",
        backgroundPosition: "center",
        backgroundSize: "700px 500px",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <NavBar code={0} logOut={logOut} status={status} />
      <Snackbar
        open={openAlert}
        autoHideDuration={3000}
        onClose={() => setOpenAlert(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        style={{
          width: m1 ? "20%" : "90%",
          paddingLeft: m1 ? "0%" : "10%",
          textAlign: "center",
          paddingTop: m1 ? "3%" : "14%",
        }}
      >
        <Alert
          onClose={() => setOpenAlert(false)}
          severity={alertType}
          sx={{ width: "100%", textAlign: "center", fontFamily: "Bungee" }}
        >
          {!m1 ? <p style={{ fontSize: "10px" }}>{alertMsg}</p> : alertMsg}
        </Alert>
      </Snackbar>
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
        messageAlertForPayments={messageAlertForPayments}
        messageAlert={messageAlert}
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
