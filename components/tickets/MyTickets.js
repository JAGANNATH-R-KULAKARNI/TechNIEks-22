import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as c from "../../utils/Colors";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRouter } from "next/router";
import { useQRCode } from "next-qrcode";
import jsPDF from "jspdf";
import pdfMake from "pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import htmlToPdfmake from "html-to-pdfmake";
import domtoimage from "dom-to-image";

const theme = createTheme();

export default function Tickets(props) {
  const router = useRouter();
  const m1 = useMediaQuery("(min-width:600px)");
  const { Canvas } = useQRCode();
  const [glitch, setGlitch] = React.useState(false);

  const generateTicket = (id) => {
    const doc = new jsPDF();

    //get table html
    const pdfTable = document.getElementById(id);
    //html to pdf format
    var html = htmlToPdfmake(pdfTable.innerHTML);

    const documentDefinition = { content: html };
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    pdfMake.createPdf(documentDefinition).open();
  };

  const generatePdf = (i) => {
    const doc = new jsPDF("portrait", "pt", "a4", "true");
    doc.addImage(i, "JPEG", 10, 30, 360, 640);
    doc.save("Invoice.pdf");
  };

  const generateJpeg = (id, name, usn) => {
    setGlitch(true);

    domtoimage
      .toJpeg(document.getElementById(id), {
        quality: 1,
        width: m1 ? 425 : 393,
        height: 600,
        bgcolor: "white",
      })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = name + " " + usn + ".jpg";
        link.href = dataUrl;
        //  generatePdf(dataUrl);
        link.click();

        setTimeout(() => {
          setGlitch(false);
        }, 700);
      })
      .catch((err) => {
        alert("error");
        setTimeout(() => {
          setGlitch(false);
        }, 700);
        console.log(err);
      });
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ height: "10px" }}></div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1
          style={{
            textAlight: "center",
            fontSize: m1 || glitch ? "50px" : "35px",
            color: c.c3,
          }}
        >
          My Tickets
        </h1>
      </div>

      <main>
        <Container>
          <Grid container spacing={4}>
            {props.tickets &&
              props.tickets.map((card, index) => (
                <Grid
                  item
                  key={card}
                  xs={12}
                  sm={6}
                  md={4}
                  id={`${card.name + index}`}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        maxHeight: "180px",
                      }}
                      image={card.events.image}
                      alt="random"
                    />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div
                        style={{
                          minWidth: "170px",
                          maxHeight: "170px",
                          maxWidth: "170px",
                          minHeight: "170px",
                          marginTop: "-100px",
                        }}
                      >
                        <Canvas
                          text={
                            card.name +
                            " | " +
                            card.events.name +
                            " |  " +
                            card.nooftickets +
                            " Tickets"
                          }
                          options={{
                            type: "image/jpeg",
                            quality: 1,
                            level: "H",
                            margin: 3,
                            scale: 4,
                            width: 160,
                            color: {
                              dark: c.c3,
                              light: c.c2,
                            },
                          }}
                        />
                      </div>
                    </div>

                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        style={{
                          width: "100%",
                          textAlign: "center",
                          marginTop: "-25px",
                          fontSize: "30px",
                        }}
                        gutterBottom
                        variant="h5"
                        component="h1"
                      >
                        <b> {card.events.name}</b>
                      </Typography>
                      <div style={{ display: "flex" }}>
                        <Typography
                          style={{ width: "50%", textAlign: "left" }}
                          gutterBottom
                          variant="h5"
                          component="h2"
                        >
                          {card.nooftickets} Tickets
                        </Typography>
                        <Typography
                          style={{ width: "50%", textAlign: "right" }}
                          gutterBottom
                          variant="h5"
                          component="h2"
                        >
                          ₹ {card.amountpaid}
                        </Typography>
                      </div>

                      <Typography
                        style={{
                          textAlign: "center",
                          borderStyle: "outset",
                          borderColor: c.c3,
                          borderRadius: "5%",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <i style={{ width: "50%", fontSize: "17px" }}>
                            <b> {card.name} </b>
                          </i>
                          <i style={{ width: "50%", fontSize: "17px" }}>
                            <b> {card.usn} </b>
                          </i>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <i style={{ width: "50%", fontSize: "12px" }}>
                            {card.events.date}{" "}
                          </i>
                          <i style={{ width: "50%", fontSize: "12px" }}>
                            {card.events.timings}{" "}
                          </i>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div>
                            <i style={{ width: "100%", fontSize: "12px" }}>
                              <b> Ticket_id :</b> {card.order_id}{" "}
                            </i>
                            <br />
                            <i style={{ width: "100%", fontSize: "12px" }}>
                              <b> Payment_id :</b> {card.payment_id}{" "}
                            </i>
                            <br />
                            <i style={{ width: "100%", fontSize: "12px" }}>
                              <b> Location :</b> {card.events.location}{" "}
                            </i>
                            <br />
                          </div>
                        </div>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        style={{ width: "100%", backgroundColor: c.c1 }}
                        onClick={() => {
                          generateJpeg(
                            `${card.name + index}`,
                            card.name,
                            card.usn
                          );
                        }}
                      >
                        {glitch ? "ಸುಭಕೃತು 2022" : "Print It"}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
      </main>
      <br />
      <br />
      <br />
      <br />
    </ThemeProvider>
  );
}
