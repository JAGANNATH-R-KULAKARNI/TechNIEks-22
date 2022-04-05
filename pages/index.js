import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SHeader from "../components/headers/Slides";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import useMediaQuery from "@mui/material/useMediaQuery";
import Body from "../components/body/Body";

export default function Home() {
  const m1 = useMediaQuery("(min-width:600px)");

  return (
    <div>
      <NavBar code={0} />

      <SHeader />
      <div style={{ height: !m1 ? "40px" : "0px" }}></div>
      <Body />
      <div style={{ height: "100px" }}></div>
      <Footer />
    </div>
  );
}
