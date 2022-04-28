import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { supabase } from "../../utils/SupabaseClient";
import React from "react";
import styles from "../../styles/Creaters.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as c from "../../utils/Colors";
import { useRouter } from "next/router";

export default function Refunds() {
  const [status, setStatus] = React.useState(false);
  const m1 = useMediaQuery("(min-width:600px)");
  const router = useRouter();

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
        backgroundColor: "#000000",
        color: "white",
        backgroundImage: "url(/images/deepa2.png)",
        backgroundPosition: m1 ? "center 80px" : "center 100px",
        backgroundSize: m1 ? "442px 499px" : "260px 293px",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        scrollBehavior: "smooth",
      }}
    >
      <NavBar code={0} logOut={logOut} status={status} />
      <div style={{ height: "10px" }}></div>
      <h1
        style={{
          textAlign: "center",
          fontSize: m1 ? "50px" : "25px",
          color: c.c4,
          fontFamily: "Bungee",
        }}
      >
        Refunds
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: m1 ? "20%" : "10%",
          paddingRight: m1 ? "20%" : "10%",
          fontSize: m1 ? "15px" : "10px",
          wordSpacing: m1 ? "5px" : "4px",
          lineHeight: 1.7,
        }}
      >
        <div>
          <h3
            style={{
              fontFamily: "inherit",
              color: c.c3,
              fontSize: m1 ? "23px" : "15px",
            }}
          >
            Ticket
          </h3>
          <p>
            ticket of TechNIEks 22 event you want to buy can be bought on this
            website. We use Razorpay payment system which is a secure payment
            system
          </p>
          <div style={{ height: m1 ? "3px" : "1px" }}></div>
          <h3
            style={{
              fontFamily: "inherit",
              color: c.c3,
              fontSize: m1 ? "23px" : "15px",
            }}
          >
            Send us an email
          </h3>
          <p>
            once you buy a ticket, Cancellation of ticket is not possible. But
            if you did not recieve the ticket and payment is done, then refund
            will be processed.
          </p>
          <p>
            TechNIEks strives to ensure that you are happy with the ticket you
            have purchased. For Refunds contact us at
            <i
              style={{
                fontFamily: "sans-serif",
                paddingLeft: "10px",
                fontSize: m1 ? "20px" : "12px",
                textDecoration: "underline",
              }}
            >
              technieks22@gmail.com
            </i>
          </p>
          <div style={{ height: m1 ? "3px" : "1px" }}></div>
          <h3
            style={{
              fontFamily: "inherit",
              color: c.c3,
              fontSize: m1 ? "23px" : "15px",
            }}
          >
            CONTACT INFORMATION
          </h3>
          <p>
            If you would like to: access, correct, amend or delete any personal
            information we have about you, register a complaint, or simply want
            more information then contact our team at
            <i
              style={{
                fontFamily: "sans-serif",
                paddingLeft: "10px",
                fontSize: m1 ? "20px" : "12px",
                textDecoration: "underline",
              }}
            >
              technieks22@gmail.com
            </i>
          </p>
          or
          <ul>
            <li>(91+) 9353739401</li>
            <li>(91+) 8088546585</li>
            <li>(91+) 7204933863</li>
            <li>(91+) 8722889927</li>
            <li>(91+) 6361724765</li>
          </ul>
          <br />
          {m1 ? (
            <h3
              style={{
                textAlign: "left",
                fontFamily: "inherit",
                color: c.c4,
              }}
            >
              This policy is effective as of Apr 2022 to August 2022
            </h3>
          ) : (
            <h6
              style={{
                textAlign: "left",
                fontFamily: "inherit",
                color: c.c4,
                fontSize: "12px",
              }}
            >
              This policy is effective as of Apr 2022 to August 2022
            </h6>
          )}
        </div>
      </div>

      <div style={{ height: "120px" }}></div>
      <Footer />
    </div>
  );
}
