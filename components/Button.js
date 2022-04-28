import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import * as c from "../utils/Colors";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: c.c1,
  borderColor: c.c1,
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: c.c1,
    borderColor: c.c1,
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: c.c1,
    borderColor: c.c1,
  },
  "&:focus": {
    boxShadow: `0 0 0 0.2rem ${c.c1}`,
  },
});

export default function CustomizedButtons() {
  return (
    <BootstrapButton
      variant="contained"
      disableRipple
      style={{
        backgroundColor: c.c3,
        width: "130px",
        height: "30px",
        fontSize: "10px",
      }}
    >
      Download Brochure
    </BootstrapButton>
  );
}
