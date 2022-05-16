import React from "react";
import ButtonUI from "./Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as c from "../../utils/Colors";
import { useRouter } from "next/router";

export default function Body() {
  const m1 = useMediaQuery("(min-width:600px)");
  const router = useRouter();

  const bookTickets = () => {
    router.push("/sports");
  };

  const bookTickets2 = () => {
    router.push("/events");
  };

  return (
    <div>
      <div style={{ height: !m1 ? "40px" : "0px" }}></div>

      <div
        style={{
          marginTop: m1 ? "10px" : "-50px",
          display: m1 ? "flex" : "block",
        }}
      >
        <ButtonUI
          text="Marathon"
          wid={m1 ? 200 : 300}
          maxwid={m1 ? 200 : "90%"}
          hei={m1 ? 50 : 60}
          col={c.c3}
          clicked={bookTickets}
        />
        <ButtonUI
          text="Cultural"
          wid={m1 ? 200 : 300}
          maxwid={m1 ? 200 : "90%"}
          hei={m1 ? 50 : 60}
          col={c.c3}
          clicked={bookTickets2}
        />
      </div>
    </div>
  );
}
