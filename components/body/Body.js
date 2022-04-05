import React from "react";
import ButtonUI from "./Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as c from "../../utils/Colors";
import { useRouter } from "next/router";

export default function Body() {
  const m1 = useMediaQuery("(min-width:600px)");
  const router = useRouter();

  const bookTickerts = () => {
    router.push("/book");
  };

  return (
    <div style={{ marginTop: m1 ? "50px" : "-50px" }}>
      <ButtonUI
        text="Book Now "
        wid={m1 ? 700 : 300}
        maxwid={m1 ? 700 : "90%"}
        hei={m1 ? 100 : 60}
        col={c.c1}
        clicked={bookTickerts}
      />
    </div>
  );
}
