import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import useMediaQuery from "@mui/material/useMediaQuery";
import DetailsUI from "./Details";
import DetailsUI2 from "./Details2";
import * as c from "../../utils/Colors";
import RazorPayButtonUI from "./RazorPay";

export default function Booking(props) {
  const m1 = useMediaQuery("(min-width:430px)");
  const [loading, setLoading] = React.useState(false);

  const setTheLoading = (status) => {
    setLoading(status);
  };

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
                thisCollege={props.thisCollege}
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
              style={{
                width: "25%",
                height: "250px",
                marginTop: "0px",
                borderRadius: "75px",
                fontFamily: "Bungee",
              }}
              elevation={1}
            >
              <div style={{ padding: "5%", textAlign: "center" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div>
                    <p style={{ fontSize: "20px", fontFamily: "Bungee" }}>
                      {" "}
                      Total Tickets{" "}
                    </p>
                    <p
                      style={{
                        fontSize: "40px",
                        marginTop: "-20px",
                        color: c.c3,
                        fontFamily: "Bungee",
                      }}
                    >
                      {props.no}{" "}
                    </p>
                  </div>
                  <div style={{ paddingLeft: "110px" }}>
                    <p style={{ fontSize: "20px", fontFamily: "Bungee" }}>
                      {" "}
                      Total Amount{" "}
                    </p>
                    <p
                      style={{
                        fontSize: "40px",
                        marginTop: "-20px",
                        color: c.c3,
                        fontFamily: "Bungee",
                      }}
                    >
                      ₹ {props.ticket ? props.ticket.price * props.no : 0}{" "}
                    </p>
                  </div>
                </div>

                <div style={{ marginTop: "-25px" }}>
                  <RazorPayButtonUI
                    amount={props.ticket ? props.ticket.price * props.no : 0}
                    name={props.name}
                    usn={props.usn}
                    email={props.email}
                    ticket={props.ticket}
                    no={props.no}
                    messageAlertForPayments={props.messageAlertForPayments}
                    messageAlert={props.messageAlert}
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
          thisCollege={props.thisCollege}
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
            height: "220px",
            marginTop: "0px",
            borderRadius: "70px",
            fontFamily: "Bungee",
          }}
          elevation={3}
        >
          <div style={{ padding: "3%", textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div>
                <p style={{ fontSize: "18px", fontFamily: "Bungee" }}>
                  {" "}
                  Total Tickets{" "}
                </p>
                <p
                  style={{
                    fontSize: "30px",
                    marginTop: "-20px",
                    color: c.c3,
                    fontFamily: "Bungee",
                  }}
                >
                  {" "}
                  {props.no}{" "}
                </p>
              </div>
              <div style={{ paddingLeft: "15%" }}>
                <p style={{ fontSize: "18px", fontFamily: "Bungee" }}>
                  {" "}
                  Total Amount
                </p>
                <p
                  style={{
                    fontSize: "30px",
                    marginTop: "-20px",
                    color: c.c3,
                    fontFamily: "Bungee",
                  }}
                >
                  {" "}
                  ₹ {props.ticket ? props.ticket.price * props.no : 0}{" "}
                </p>
              </div>
            </div>

            <div style={{ marginTop: "-20px" }}>
              <RazorPayButtonUI
                amount={props.ticket ? props.ticket.price * props.no : 0}
                name={props.name}
                usn={props.usn}
                email={props.email}
                no={props.no}
                ticket={props.ticket}
                messageAlertForPayments={props.messageAlertForPayments}
                messageAlert={props.messageAlert}
                loading={loading}
                setTheLoading={setTheLoading}
                thisCollege={props.thisCollege}
              />
            </div>
            <br />
          </div>
        </Paper>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
