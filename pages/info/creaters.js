import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { supabase } from "../../utils/SupabaseClient";
import React from "react";
import styles from "../../styles/Creaters.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as c from "../../utils/Colors";
import CardUI from "../../components/creater";
import { useRouter } from "next/router";
import Paper from "@mui/material/Paper";

export default function Creaters() {
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

  const des = [
    {
      name: "Jagannath R Kulakarni",
      des1: "Team Captain",
      des2: "Software Developer",
    },
    {
      name: "Vishakha V",
      des1: "Product QA Tester",
      des2: "Project Manager",
    },
    {
      name: "Prajwal Benedict A",
      des1: "UI/UX Designer",
      des2: "Site Reliability Engineer",
    },
    {
      name: "Niraj Sharma",
      des1: "Cloud Engineer",
      des2: "Buisness Analyst",
    },
    {
      name: "Lohith C",
      des1: "Database Engineer",
      des2: "Marketing Manager",
    },
  ];
  return (
    <div
      style={{
        backgroundColor: "#000000",
        color: "white",
        backgroundImage:
          "url(" +
          "https://render.fineartamerica.com/images/rendered/default/print/6/8/break/images/artworkimages/medium/2/a-traditional-south-indian-lamp-by-chandrachoodan-gopalakrishnan.jpg" +
          ")",
        backgroundPosition: m1 ? "center 50px" : "center 80px",
        backgroundSize: m1 ? "445px 600px" : "260px 350px",
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
          des1="Cloud Engineer"
          des2="Buisness Analyst"
        />
        <CardUI
          link="/images/prajwal_1.svg"
          name="Prajwal B"
          code={2}
          quote="The way to get started is to quit talking and begin doing"
          insta="https://www.instagram.com/benedictprajwal/?hl=en"
          linked="https://www.linkedin.com/in/prajwal-benedict-a-048511186/"
          des1="UI/UX Designer"
          des2="Site Reliability Engineer"
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
          des1="Software Developer"
          des2="Team Captain"
        />
        <CardUI
          link="/images/lohith.svg"
          name="Lohith C"
          code={4}
          quote="No one is you and that itself is your power"
          insta="https://www.instagram.com/lohith_channaiah/?hl=en"
          linked="https://www.linkedin.com/in/lohith-c-12358b1a7/"
          des1="Database Engineer"
          des2="Marketing Manager"
        />
        <CardUI
          link="/images/vishakha.svg"
          name="Vishakha V"
          code={5}
          quote="Honesty is the best policy, but insanity is a better defense."
          insta="https://www.instagram.com/vishakhavenugopal/?hl=en"
          linked="https://vishakha-portfolio.vercel.app/"
          des1="Product QA Tester"
          des2="Project Manager"
        />
      </div>
      {m1 ? null : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "20px",
          }}
        >
          <div style={{ width: "100%" }}>
            {des &&
              des.map((item) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                      paddingTop: "20px",
                    }}
                    key={item}
                  >
                    <Paper
                      style={{
                        height: "100px",
                        minWidth: "80%",
                        backgroundColor: "white",
                        borderRadius: "20px",
                      }}
                    >
                      <p
                        style={{
                          color: "black",
                          fontSize: "16px",
                          textAlign: "center",
                          color: c.c3,
                        }}
                      >
                        {item.name}
                      </p>
                      <p
                        style={{
                          color: "black",
                          fontSize: "14px",
                          textAlign: "center",
                          marginTop: "-10px",
                        }}
                      >
                        <i>{`${item.des1} &`}</i>
                      </p>
                      <p
                        style={{
                          color: "black",
                          fontSize: "14px",
                          textAlign: "center",
                          marginTop: "-10px",
                        }}
                      >
                        <i>{`${item.des2}`}</i>
                      </p>
                    </Paper>
                  </div>
                );
              })}
          </div>
        </div>
      )}
      <div style={{ height: "120px" }}></div>
      <Footer />
    </div>
  );
}
