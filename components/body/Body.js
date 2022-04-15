import React from "react";
import ButtonUI from "./Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as c from "../../utils/Colors";
import { useRouter } from "next/router";

export default function Body() {
  const m1 = useMediaQuery("(min-width:600px)");
  const router = useRouter();

  const bookTickerts = () => {
    router.push("/events");
  };

  return (
    <div>
      <div style={{ height: !m1 ? "40px" : "0px" }}></div>

      <div style={{ marginTop: m1 ? "10px" : "-50px" }}>
        <ButtonUI
          text="Book Now "
          wid={m1 ? 200 : 300}
          maxwid={m1 ? 200 : "90%"}
          hei={m1 ? 50 : 60}
          col={c.c3}
          clicked={bookTickerts}
        />
      </div>
    </div>
  );
}
