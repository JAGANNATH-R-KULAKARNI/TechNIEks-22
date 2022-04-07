import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import React, { useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import ButtonUI from "./Button";
import Paper from "@mui/material/Paper";
import { useRouter } from "next/router";
import useMediaQuery from "@mui/material/useMediaQuery";
import DetailsUI from "./Details";
import DetailsUI2 from "./Details2";
import * as c from "../../utils/Colors";
import RazorPayButtonUI from "./RazorPay";

export default function Booking(props) {
  const router = useRouter();
  const m1 = useMediaQuery("(min-width:430px)");
  const m2 = useMediaQuery("(min-width:700px)");
  const m3 = useMediaQuery("(min-width:1000px)");
  const m4 = useMediaQuery("(min-width:1300px)");
  const m5 = useMediaQuery("(min-width:1700px)");

  if (m1)
    return (
      <div style={{ paddingLeft: "5%", paddingRight: "5%" }}>
        <br />
        <br />

        <Grid container spacing={2}>
          <Grid item xs={12} style={{ maxHeight: "600px" }}>
            <br />
            <br />
            <br />
            <br />
            <div style={{ marginTop: "-130px" }}>
              <DetailsUI
                ticket={props.ticket}
                name={props.name}
                usn={props.usn}
                no={props.no}
                enjoy={props.enjoy}
                setName={props.setName}
                setUsn={props.setUsn}
                setNo={props.setNo}
                setEnjoy={props.setEnjoy}
              />
            </div>
          </Grid>
          <br />
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Paper
              style={{ width: "25%", height: "250px", marginTop: "0px" }}
              elevation={1}
            >
              <div style={{ padding: "5%", textAlign: "center" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div>
                    <p style={{ fontSize: "20px" }}> Total Tickets </p>
                    <p
                      style={{
                        fontSize: "40px",
                        marginTop: "-20px",
                        color: c.c1,
                      }}
                    >
                      {props.no}{" "}
                    </p>
                  </div>
                  <div style={{ paddingLeft: "110px" }}>
                    <p style={{ fontSize: "20px" }}> Total Amount </p>
                    <p
                      style={{
                        fontSize: "40px",
                        marginTop: "-20px",
                        color: c.c1,
                      }}
                    >
                      ₹ {props.ticket ? props.ticket.price * props.no : 0}{" "}
                    </p>
                  </div>
                </div>

                <div
                  style={{ marginTop: "-25px" }}
                  //   onClick={() => router.push(cartLen > 0 ? "/payment" : "/")}
                >
                  <RazorPayButtonUI
                    amount={props.ticket ? props.ticket.price * props.no : 0}
                    name={props.name}
                    usn={props.usn}
                    email={props.email}
                    ticket={props.ticket}
                  />
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>

        <br />
        <br />
        <br />
        <br />
      </div>
    );

  return (
    <div>
      <br />
      <br />
      <div style={{ marginTop: "-100px" }}>
        <DetailsUI2
          ticket={props.ticket}
          name={props.name}
          usn={props.usn}
          no={props.no}
          enjoy={props.enjoy}
          setName={props.setName}
          setUsn={props.setUsn}
          setNo={props.setNo}
          setEnjoy={props.setEnjoy}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: "5%",
          paddingRight: "5%",
        }}
      >
        <Paper
          style={{
            width: "100%",
            height: "200px",
            marginTop: "0px",
          }}
          elevation={3}
        >
          <div style={{ padding: "3%", textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div>
                <p style={{ fontSize: "18px" }}> Total Tickets </p>
                <p style={{ fontSize: "30px", marginTop: "-20px" }}>
                  {" "}
                  {props.no}{" "}
                </p>
              </div>
              <div style={{ paddingLeft: "15%" }}>
                <p style={{ fontSize: "18px" }}> Total Amount</p>
                <p style={{ fontSize: "30px", marginTop: "-20px" }}>
                  {" "}
                  ₹ {props.ticket ? props.ticket.price * props.no : 0}{" "}
                </p>
              </div>
            </div>

            <div
              style={{ marginTop: "-10px" }}
              //   onClick={() => router.push(cartLen > 0 ? "/payment" : "/")}
            >
              <RazorPayButtonUI
                amount={props.ticket ? props.ticket.price * props.no : 0}
                name={props.name}
                usn={props.usn}
                email={props.email}
                ticket={props.ticket}
              />
            </div>
          </div>
        </Paper>
      </div>
      <br />
      <br />
    </div>
  );
}
