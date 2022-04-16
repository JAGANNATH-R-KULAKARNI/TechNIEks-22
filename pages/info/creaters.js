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
    <div
      style={{
        backgroundColor: "#000000",
        color: "white",
        backgroundImage: "url(" + "../images/back.jpg" + ")",
        backgroundPosition: "center",
        backgroundSize: "700px 500px",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
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
          insta="https://www.instagram.com/niraj_s_sharma/?hl=en"
          linked="https://www.linkedin.com/in/niraj-sharma-5538801a7/"
        />
        <CardUI
          link="/images/prajwal_1.svg"
          name="Prajwal B"
          code={2}
          quote="The way to get started is to quit talking and begin doing"
          insta="https://www.instagram.com/benedictprajwal/?hl=en"
          linked="https://www.linkedin.com/in/prajwal-benedict-a-048511186/"
        />
        <CardUI
          link="/images/jagannath.svg"
          name="Jagannath R K"
          code={3}
          quote="If life were predictable
It would cease to be life
And be without flavor"
          insta="https://www.instagram.com/coder446/?hl=en"
          linked="https://www.linkedin.com/in/jagannath-r-kulakarni-a465841a7/"
        />
        <CardUI
          link="/images/lohith.svg"
          name="Lohith C"
          code={4}
          quote="No Pen, No Paper, still drawing attention"
          insta="https://www.instagram.com/lohith_channaiah/?hl=en"
          linked="https://www.linkedin.com/in/lohith-c-12358b1a7/"
        />
        <CardUI
          link="/images/vishakha.svg"
          name="Vishakha V"
          code={5}
          quote="Honesty is the best policy, but insanity is a better defense."
          insta="https://www.instagram.com/vishakhavenugopal/?hl=en"
          linked="https://www.linkedin.com/in/vishakha-v-4825b4163/"
        />
      </div>
      <div style={{ height: "120px" }}></div>
      <Footer />
    </div>
  );
}
