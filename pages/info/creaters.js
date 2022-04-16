import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { supabase } from "../../utils/SupabaseClient";
import React from "react";
import styles from "../../styles/Creaters.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as c from "../../utils/Colors";
import CardUI from "../../components/creater";

export default function Creaters() {
  const [status, setStatus] = React.useState(false);
  const m1 = useMediaQuery("(min-width:600px)");

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
  }

  return (
    <div style={{ backgroundColor: "#000000", color: "white" }}>
      <NavBar code={0} logOut={logOut} status={status} />
      <div style={{ height: "10px" }}></div>
      <h1
        style={{
          textAlign: "center",
          fontSize: m1 ? "50px" : "23px",
          color: c.c4,
          fontFamily: "Bungee",
        }}
      >
        Website Designers
      </h1>
      <br />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: m1 ? "6" : "10%",
          paddingRight: m1 ? "6" : "10%",
        }}
      >
        <CardUI
          link="/images/niraj.svg"
          name="Niraj Sharma"
          code={1}
          quote="I’m smiling because I have no idea what’s going on."
        />
        <CardUI
          link="/images/prajwal_1.svg"
          name="Prajwal Benedict"
          code={2}
          quote="My Father gave me the greatest gift anyone could ever give to a person, He believed in me"
        />
        <CardUI
          link="/images/jagannath.svg"
          name="Jagannath R K"
          code={3}
          quote="If life were predictable
It would cease to be life
And be without flavor"
        />
        <CardUI
          link="/images/lohith.svg"
          name="Lohith C"
          code={4}
          quote="No Pen, No Paper, still drawing attention"
        />
        <CardUI
          link="/images/vishakha.svg"
          name="Vishakha V"
          code={5}
          quote="Honesty is the best policy, but insanity is a better defense."
        />
      </div>
      <div style={{ height: "120px" }}></div>
      <Footer />
    </div>
  );
}
