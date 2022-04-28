import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { supabase } from "../../utils/SupabaseClient";
import React from "react";
import styles from "../../styles/Creaters.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as c from "../../utils/Colors";
import { useRouter } from "next/router";

export default function TermasAndConditions() {
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
          fontSize: m1 ? "50px" : "23px",
          color: c.c4,
          fontFamily: "Bungee",
        }}
      >
        Terms and Conditions
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
            Overview
          </h3>
          <p>
            TechNIEks website is operated by{" "}
            <i style={{ textDecoration: "underline" }}>Jagannath R Kulakarni</i>
            ,
            <i style={{ textDecoration: "underline", paddingLeft: "10px" }}>
              Prajwal Benedict
            </i>
            ,
            <i style={{ textDecoration: "underline", paddingLeft: "10px" }}>
              Vishkha V
            </i>
            ,
            <i style={{ textDecoration: "underline", paddingLeft: "10px" }}>
              Niraj Sharma
            </i>
            ,
            <i style={{ textDecoration: "underline", paddingLeft: "10px" }}>
              Lohith C
            </i>
            . Throughout the site, the terms “we”, “us” and “our” refer to
            TechNIEks. TechNIEks offers this website, including all information,
            tools and services available from this site to you, the user,
            conditioned upon your acceptance of all terms, conditions, policies
            and notices stated here. By visiting our site and/ or purchasing
            something from us, you engage in our “Service” and agree to be bound
            by the following terms and conditions (“Terms of Service”, “Terms”),
            including those additional terms and conditions and policies
            referenced herein and/or available by hyperlink. These Terms of
            Service apply to all users of the site, including without limitation
            users who are browsers, vendors, customers, merchants, and/ or
            contributors of content. Please read these Terms of Service
            carefully before accessing or using our website. By accessing or
            using any part of the site, you agree to be bound by these Terms of
            Service. If you do not agree to all the terms and conditions of this
            agreement, then you may not access the website or use any services.
            If these Terms of Service are considered an offer, acceptance is
            expressly limited to these Terms of Service. Any new features or
            tools which are added to the current store shall also be subject to
            the Terms of Service. You can review the most current version of the
            Terms of Service at any time on this page. We reserve the right to
            update, change or replace any part of these Terms of Service by
            posting updates and/or changes to our website. It is your
            responsibility to check this page periodically for changes. Your
            continued use of or access to the website following the posting of
            any changes constitutes acceptance of those changes.
          </p>
          <div style={{ height: m1 ? "3px" : "1px" }}></div>
          <h3
            style={{
              fontFamily: "inherit",
              color: c.c3,
              fontSize: m1 ? "23px" : "15px",
            }}
          >
            Disclaimer
          </h3>
          <p>
            The materials on TechNIEks s website are provided on an {"'as is'"}
            basis. TechNIEks makes no warranties, expressed or implied, and
            hereby disclaims and negates all other warranties including, without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights.
          </p>
          <p>
            Further, TechNIEks does not warrant or make any representations
            concerning the accuracy, likely results, or reliability of the use
            of the materials on its website or otherwise relating to such
            materials or on any sites linked to this site.
          </p>
          <div style={{ height: m1 ? "3px" : "1px" }}></div>
          <h3
            style={{
              fontFamily: "inherit",
              color: c.c3,
              fontSize: m1 ? "23px" : "15px",
            }}
          >
            Limitations
          </h3>
          <p>
            In no event shall TechNIEks or its suppliers be liable for any
            damages (including, without limitation, damages for loss of data or
            profit, or due to business interruption) arising out of the use or
            inability to use the materials on TechNIEks s website, even if
            TechNIEks or a TechNIEks authorised representative has been notified
            orally or in writing of the possibility of such damage. Because some
            jurisdictions do not allow limitations on implied warranties, or
            limitations of liability for consequential or incidental damages,
            these limitations may not apply to you.
          </p>
          <div style={{ height: m1 ? "3px" : "1px" }}></div>
          <h3
            style={{
              fontFamily: "inherit",
              color: c.c3,
              fontSize: m1 ? "23px" : "15px",
            }}
          >
            Accuracy of materials
          </h3>
          <p>
            The materials appearing on TechNIEks s website could include
            technical, typographical, or photographic errors. TechNIEks does not
            warrant that any of the materials on its website are accurate,
            complete or current. TechNIEks may make changes to the materials
            contained on its website at any time without notice. However
            TechNIEks does not make any commitment to update the materials.
          </p>
          <div style={{ height: m1 ? "3px" : "1px" }}></div>
          <h3
            style={{
              fontFamily: "inherit",
              color: c.c3,
              fontSize: m1 ? "23px" : "15px",
            }}
          >
            Modifications
          </h3>
          <p>
            TechNIEks may revise these terms of service for its website at any
            time without notice. By using this website you are agreeing to be
            bound by the then current version of these terms of service.
          </p>
          <div style={{ height: m1 ? "3px" : "1px" }}></div>
          <h3
            style={{
              fontFamily: "inherit",
              color: c.c3,
              fontSize: m1 ? "23px" : "15px",
            }}
          >
            Governing Law
          </h3>
          <p>
            These terms and conditions are governed by and construed in
            accordance with the laws of TechNIEks and you irrevocably submit to
            the exclusive jurisdiction of the courts in that State or location.
          </p>
          <div style={{ height: m1 ? "3px" : "1px" }}></div>
          <h3
            style={{
              fontFamily: "inherit",
              color: c.c3,
              fontSize: m1 ? "23px" : "15px",
            }}
          >
            ACCURACY OF BILLING AND ACCOUNT INFORMATION
          </h3>
          <p>
            We may provide you with access to third-party tools over which we
            neither monitor nor have any control nor input. You acknowledge and
            agree that we provide access to such tools ”as is” and “as
            available” without any warranties, representations or conditions of
            any kind and without any endorsement. We shall have no liability
            whatsoever arising from or relating to your use of optional
            third-party tools. Any use by you of optional tools offered through
            the site is entirely at your own risk and discretion and you should
            ensure that you are familiar with and approve of the terms on which
            tools are provided by the relevant third-party provider(s). We may
            also, in the future, offer new services and/or features through the
            website (including, the release of new tools and resources). Such
            new features and/or services shall also be subject to these Terms of
            Service.
          </p>
          <div style={{ height: m1 ? "3px" : "1px" }}></div>
          <h3
            style={{
              fontFamily: "inherit",
              color: c.c3,
              fontSize: m1 ? "23px" : "15px",
            }}
          >
            USES THAT ARE PROHIBITED
          </h3>
          <p>
            In addition to other prohibitions as set forth in the Terms of
            Service, you are prohibited from using the site or its content: (a)
            for any unlawful purpose; (b) to solicit others to perform or
            participate in any unlawful acts; (c) to violate any international,
            federal, provincial or state regulations, rules, laws, or local
            ordinances; (d) to infringe upon or violate our intellectual
            property rights or the intellectual property rights of others; (e)
            to harass, abuse, insult, harm, defame, slander, disparage,
            intimidate, or discriminate based on gender, sexual orientation,
            religion, ethnicity, race, age, national origin, or disability; (f)
            to submit false or misleading information; (g) to upload or transmit
            viruses or any other type of malicious code that will or may be used
            in any way that will affect the functionality or operation of the
            Service or of any related website, other websites, or the Internet;
            (h) to collect or track the personal information of others; (i) to
            spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any
            obscene or immoral purpose; or (k) to interfere with or circumvent
            the security features of the Service or any related website, other
            websites, or the Internet. We reserve the right to terminate your
            use of the Service or any related website for violating any of the
            prohibited uses.
          </p>
          <div style={{ height: m1 ? "3px" : "1px" }}></div>
          <h3
            style={{
              fontFamily: "inherit",
              color: c.c3,
              fontSize: m1 ? "23px" : "15px",
            }}
          >
            SEVERABILITY
          </h3>
          <p>
            In the event that any provision of these Terms of Service is
            determined to be unlawful, void or unenforceable, such provision
            shall nonetheless be enforceable to the fullest extent permitted by
            applicable law, and the unenforceable portion shall be deemed to be
            severed from these Terms of Service, such determination shall not
            affect the validity and enforceability of any other remaining
            provisions.
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
              These Terms and Conditions are effective as of Apr 2022 to August
              2022
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
              These Terms and Conditions are effective as of Apr 2022 to August
              2022
            </h6>
          )}
        </div>
      </div>

      <div style={{ height: "120px" }}></div>
      <Footer />
    </div>
  );
}
