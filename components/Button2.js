import classes from "../styles/Button2.module.css";
import * as c from "../utils/Colors";
import useMediaQuery from "@mui/material/useMediaQuery";

function AButton(props) {
  const m1 = useMediaQuery("(min-width:600px)");

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
        rel="stylesheet"
      />
      <button
        className={classes.btn}
        onClick={props.clicked ? props.clicked : null}
        style={{
          backgroundColor: c.c3,
          fontFamily: "Bungee",
          width: m1 ? "400px" : "80%",
        }}
      >
        {props.text ? props.text : null}
      </button>
    </div>
  );
}

export default AButton;
