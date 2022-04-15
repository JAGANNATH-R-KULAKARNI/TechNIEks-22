import classes from "../../styles/Button2.module.css";
import * as c from "../../utils/Colors";

function AButton(props) {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
        rel="stylesheet"
      />
      <button
        className={classes.btn}
        onClick={props.clicked ? props.clicked : null}
        style={{ backgroundColor: c.c3, fontFamily: "Bungee" }}
      >
        {props.text ? props.text : null}
      </button>
    </div>
  );
}

export default AButton;
