import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as c from "../utils/Colors";
import ButtonUI from "./Button2";
import { useRouter } from "next/router";

export default function Council() {
  const m1 = useMediaQuery("(min-width:600px)");
  const router = useRouter();

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1
          style={{
            textAlight: "center",
            fontSize: m1 ? "50px" : "30px",
            color: c.c2,
            fontFamily: "Bungee",
          }}
        >
          Student & Staff <br />
          <span style={{ paddingLeft: "25%", paddingRight: "25%" }}>
            Council
          </span>
        </h1>
      </div>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: "10%",
          paddingRight: "10%",
        }}
      >
        <img
          alt="Coucil1"
          src="/images/council1.jpeg"
          style={{
            width: m1 ? "60%" : "100%",
            height: "auto",
            borderRadius: "15px",
          }}
        />
      </div>
      <br />
      <br />
      {m1 ? <div style={{ height: "80px" }}></div> : null}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: "10%",
          paddingRight: "10%",
        }}
      >
        <img
          alt="Coucil1"
          src="/images/council2.jpeg"
          style={{
            width: m1 ? "60%" : "100%",
            height: "auto",
            borderRadius: "15px",
          }}
        />
      </div>
      <br />
      <br />
      <ButtonUI
        text="Creaters"
        clicked={() => {
          router.push("/info/creaters");
        }}
      />
      <div style={{ height: m1 ? "100px" : "50px" }}></div>
    </div>
  );
}
