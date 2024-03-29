import * as React from "react";
import Button from "@mui/material/Button";

export default function BasicButtons(props) {
  return (
    <Button
      variant="outlined"
      style={{
        color: props.status ? "white" : props.color,
        backgroundColor: props.status ? props.color : "white",
        width: props.width,
        height: props.height,
        fontSize: props.size,
        borderColor: props.color,
        fontFamily: "Bungee",
      }}
      onClick={() => (props.handler ? props.handler(props.data) : null)}
    >
      {props.text}
    </Button>
  );
}
