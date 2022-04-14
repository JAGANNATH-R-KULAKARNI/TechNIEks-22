import { PortraitSharp } from "@mui/icons-material";
import classes from "../../styles/Button.module.css";

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
        style={{
          width: `${props.wid}px`,
          height: `${props.hei}px`,
          backgroundColor: props.col,
          maxWidth: props.maxwid,
        }}
      >
        {props.text ? props.text : null}
      </button>
    </div>
  );
}

export default AButton;
