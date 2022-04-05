import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function About() {
  const m1 = useMediaQuery("(min-width:600px)");

  return (
    <div>
      <NavBar code={1} />
      <h1>About</h1>
      <Footer />
    </div>
  );
}
