import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import useMediaQuery from "@mui/material/useMediaQuery";
import SignInUI from "../components/signin/SignIn2";

export default function WhoRU() {
  const m1 = useMediaQuery("(min-width:600px)");

  return (
    <div style={{ backgroundColor: "#000000", color: "white" }}>
      <NavBar code={1} />
      <div style={{ marginTop: !m1 ? "-20px" : "100px" }}>
        <SignInUI />
      </div>
      <div style={{ height: "50px" }}></div>
      <Footer />
    </div>
  );
}
