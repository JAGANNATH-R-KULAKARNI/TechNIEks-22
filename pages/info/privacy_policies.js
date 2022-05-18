import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { supabase } from "../../utils/SupabaseClient";
import React from "react";
import styles from "../../styles/Creaters.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as c from "../../utils/Colors";
import { useRouter } from "next/router";

export default function PrivacyPolicies() {
  const [status, setStatus] = React.useState(false);
  const m1 = useMediaQuery("(min-width:600px)");
  const router = useRouter();
  React.useEffect(() => {
    setInterval(function () {
      fetchTheProfile();
    }, 100);
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
        backgroundImage: "url(/images/logo4.png)",
        backgroundPosition: m1 ? "center 80px" : "center 85px",
        backgroundSize: m1 ? "450px 450px" : "250px 250px",
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
        Privacy Policies
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
            Consent
          </h3>
          <p>
            Your privacy is important to us. It is Technieks,Marathon and Cyclothon's policy to respect
            your privacy regarding any information we may collect from you
            across our website,Technieks, Marathon and Cyclothon, and other sites we own and operate.
          </p>
          <div style={{ height: m1 ? "3px" : "1px" }}></div>
          <h3
            style={{
              fontFamily: "inherit",
              color: c.c3,
              fontSize: m1 ? "23px" : "15px",
            }}
          >
            DISCLOSURE
          </h3>
          <p>
            We only ask for personal information when we truly need it to
            provide a service to you. We collect it by fair and lawful means,
            with your knowledge and consent. We also let you know why we’re
            collecting it and how it will be used.
          </p>
          <div style={{ height: m1 ? "3px" : "1px" }}></div>
          <h3
            style={{
              fontFamily: "inherit",
              color: c.c3,
              fontSize: m1 ? "23px" : "15px",
            }}
          >
            SECURITY
          </h3>
          <p>
            We only retain collected information for as long as necessary to
            provide you with your requested service. What data we store, we’ll
            protect within commercially acceptable means to prevent loss and
            theft, as well as unauthorised access, disclosure, copying, use or
            modification.
          </p>
          <div style={{ height: m1 ? "3px" : "1px" }}></div>
          <h3
            style={{
              fontFamily: "inherit",
              color: c.c3,
              fontSize: m1 ? "23px" : "15px",
            }}
          >
            THIRD-PARTY SERVICES
          </h3>
          <p>
            We don’t share any personally identifying information publicly or
            with third-parties, except when required to by law. Our website may
            link to external sites that are not operated by us. Please be aware
            that we have no control over the content and practices of these
            sites, and cannot accept responsibility or liability for their
            respective privacy policies.
          </p>
          <div style={{ height: m1 ? "3px" : "1px" }}></div>
          <h3
            style={{
              fontFamily: "inherit",
              color: c.c3,
              fontSize: m1 ? "23px" : "15px",
            }}
          >
            Your Choice
          </h3>
          <p>
            You are free to refuse our request for your personal information,
            with the understanding that we may be unable to provide you with
            some of your desired services.
          </p>
          <div style={{ height: m1 ? "3px" : "1px" }}></div>
          <h3
            style={{
              fontFamily: "inherit",
              color: c.c3,
              fontSize: m1 ? "23px" : "15px",
            }}
          >
            Contact us
          </h3>
          <p>
            Your continued use of our website will be regarded as acceptance of
            our practices around privacy and personal information. If you have
            any questions about how we handle user data and personal
            information, feel free to contact us
          </p>
          <div style={{ height: m1 ? "3px" : "1px" }}></div>
          <h3
            style={{
              fontFamily: "inherit",
              color: c.c3,
              fontSize: m1 ? "23px" : "15px",
            }}
          >
            Cookie Policy for TechNIEks
          </h3>
          <p>
            When you create an account with us then we will use cookies for the
            management of the signup process and general administration. These
            cookies will usually be deleted when you log out however in some
            cases they may remain afterwards to remember your site preferences
            when logged out.
          </p>
          <p>
            We use cookies when you are logged in so that we can remember this
            fact. This prevents you from having to log in every single time you
            visit a new page. These cookies are typically removed or cleared
            when you log out to ensure that you can only access restricted
            features and areas when logged in.
          </p>
          <p>
            When you submit data to through a form such as those found on
            contact pages or comment forms cookies may be set to remember your
            user details for future correspondence.
          </p>
          <p>
            As is common practice with almost all professional websites this
            site uses cookies, which are tiny files that are downloaded to your
            computer, to improve your experience. This page describes what
            information they gather, how we use it and why we sometimes need to
            store these cookies. We will also share how you can prevent these
            cookies from being stored however this may downgrade or break
            certain elements of the sites functionality.
          </p>
          <p>
            We use cookies for a variety of reasons detailed above.
            Unfortunately in most cases there are no industry standard options
            for disabling cookies without completely disabling the functionality
            and features they add to this site. It is recommended that you leave
            on all cookies if you are not sure whether you need them or not in
            case they are used to provide a service that you use.
          </p>
          <div style={{ height: m1 ? "3px" : "1px" }}></div>
          <h3
            style={{
              fontFamily: "inherit",
              color: c.c3,
              fontSize: m1 ? "23px" : "15px",
            }}
          >
            Social Media
          </h3>
          <p>
            We also use social media buttons and/or plugins on this site that
            allow you to connect with our social network in various ways.
          </p>
          <div style={{ height: m1 ? "3px" : "1px" }}></div>
          <h3
            style={{
              fontFamily: "inherit",
              color: c.c3,
              fontSize: m1 ? "23px" : "15px",
            }}
          >
            More Information
          </h3>
          <p>
            Hopefully that has clarified things for you and as was previously
            mentioned if there is something that you aren t sure whether you
            need or not it s usually safer to leave cookies enabled in case it
            does interact with one of the features you use on our site.
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
