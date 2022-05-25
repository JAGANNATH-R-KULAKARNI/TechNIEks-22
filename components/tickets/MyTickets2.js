import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as c from "../../utils/Colors";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useQRCode } from "next-qrcode";
import domtoimage from "dom-to-image";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import ButtonUI from "../Button2";
import { supabase } from "../../utils/SupabaseClient";

const theme = createTheme();

const shirtsType = {
  S: "Small",
  M: "Medium",
  L: "Large",
  XL: "X Large",
  XLL: "XX Large",
  XLLL: "XXX Large",
};
export default function Tickets(props) {
  const m1 = useMediaQuery("(min-width:600px)");
  const { Canvas } = useQRCode();
  const [glitch, setGlitch] = React.useState(false);

  const generateJpeg = (id, name, usn) => {
    setGlitch(true);

    domtoimage
      .toJpeg(document.getElementById(id), {
        quality: 1,
        width: m1 ? 425 : 393,
        height: 650,
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
      });
  };

  const validateTheTicket = async (idbro) => {
    try {
      const { data, error } = await supabase
        .from("payments")
        .update({ expired: 1 })
        .match({ id: idbro });

      if (data) {
        alert("Validated Successfully");
      }

      if (error) {
        alert("Not Validated");
      }
    } catch (err) {
      alert("Something happened :(");
    }

    window.location.reload();
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ height: "10px" }}></div>
      {m1 ? <br /> : null}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1
          style={{
            textAlight: "center",
            fontSize: m1 || glitch ? "50px" : "35px",
            color: c.c2,
            fontFamily: "Bungee",
          }}
        >
          Admins Only
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
        <FormControl
          variant="outlined"
          style={{
            color: c.c1,
            minWidth: m1 ? "370px" : "90%",
            fontFamily: "Bungee",
          }}
          sx={{
            input: {
              color: c.c4,
            },
            "& .MuiOutlinedInput-root": {
              "& > fieldset": {
                borderColor: c.c4,
              },
            },
            "& .MuiOutlinedInput-root:hover": {
              "& > fieldset": {
                borderColor: c.c2,
              },
            },
            "& .MuiFormLabel-root": {
              color: c.c4,
              fontWeight: 100,
            },
            fontFamily: "Bungee",
          }}
        >
          <InputLabel
            htmlFor="outlined-adornment-password"
            style={{ fontFamily: "Bungee" }}
          >
            {"ID"}
          </InputLabel>
          <OutlinedInput
            id="idbro"
            type="number"
            value={props.idbro}
            onChange={(e) => {
              props.setIDBro(e.target.value);
            }}
            label="ID"
            placeholder={"Ask For Id"}
            sx={{
              fontFamily: "Bungee",
              input: {
                color: c.c2,
              },
              borderColor: c.c4,
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  borderColor: c.c4,
                },
              },
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  borderColor: c.c2,
                },
              },
              "& .MuiFormLabel-root": {
                color: c.c4,
                fontWeight: 100,
              },
              "& .MuiFormLabel-root&:hover": {
                color: c.c4,
                fontWeight: 100,
              },
              "& label.Mui-focused": {
                color: c.c4,
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: c.c4,
                },
              },
            }}
          />
        </FormControl>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: "10%",
          paddingRight: "10%",
          marginTop: "10px",
        }}
      >
        <FormControl
          variant="outlined"
          style={{
            color: c.c1,
            minWidth: m1 ? "370px" : "90%",
            fontFamily: "Bungee",
          }}
          sx={{
            input: {
              color: c.c4,
            },
            "& .MuiOutlinedInput-root": {
              "& > fieldset": {
                borderColor: c.c4,
              },
            },
            "& .MuiOutlinedInput-root:hover": {
              "& > fieldset": {
                borderColor: c.c2,
              },
            },
            "& .MuiFormLabel-root": {
              color: c.c4,
              fontWeight: 100,
            },
            fontFamily: "Bungee",
          }}
        >
          <InputLabel
            htmlFor="outlined-adornment-password"
            style={{ fontFamily: "Bungee" }}
          >
            {"Phone Number"}
          </InputLabel>
          <OutlinedInput
            id="phnumberbro"
            type="number"
            value={props.phnum}
            onChange={(e) => {
              props.setPhnum(e.target.value);
            }}
            label="Phone Number"
            placeholder={"+91"}
            sx={{
              fontFamily: "Bungee",
              input: {
                color: c.c2,
              },
              borderColor: c.c4,
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  borderColor: c.c4,
                },
              },
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  borderColor: c.c2,
                },
              },
              "& .MuiFormLabel-root": {
                color: c.c4,
                fontWeight: 100,
              },
              "& .MuiFormLabel-root&:hover": {
                color: c.c4,
                fontWeight: 100,
              },
              "& label.Mui-focused": {
                color: c.c4,
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: c.c4,
                },
              },
            }}
          />
        </FormControl>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: "10%",
          paddingRight: "10%",
          marginTop: "10px",
        }}
      >
        <FormControl
          variant="outlined"
          style={{
            color: c.c1,
            minWidth: m1 ? "370px" : "90%",
            fontFamily: "Bungee",
          }}
          sx={{
            input: {
              color: c.c4,
            },
            "& .MuiOutlinedInput-root": {
              "& > fieldset": {
                borderColor: c.c4,
              },
            },
            "& .MuiOutlinedInput-root:hover": {
              "& > fieldset": {
                borderColor: c.c2,
              },
            },
            "& .MuiFormLabel-root": {
              color: c.c4,
              fontWeight: 100,
            },
            fontFamily: "Bungee",
          }}
        >
          <InputLabel
            htmlFor="outlined-adornment-password"
            style={{ fontFamily: "Bungee" }}
          >
            {"Payment_Id"}
          </InputLabel>
          <OutlinedInput
            id="pay_id_bro"
            type="text"
            value={props.payment_id}
            onChange={(e) => {
              props.setPaymentId(e.target.value);
            }}
            label="Payment ID"
            placeholder={"Ask For Payment ID"}
            sx={{
              fontFamily: "Bungee",
              input: {
                color: c.c2,
              },
              borderColor: c.c4,
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  borderColor: c.c4,
                },
              },
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  borderColor: c.c2,
                },
              },
              "& .MuiFormLabel-root": {
                color: c.c4,
                fontWeight: 100,
              },
              "& .MuiFormLabel-root&:hover": {
                color: c.c4,
                fontWeight: 100,
              },
              "& label.Mui-focused": {
                color: c.c4,
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: c.c4,
                },
              },
            }}
          />
        </FormControl>
      </div>
      <br />

      <ButtonUI text="Search" clicked={props.filterTheTicket} />

      <br />
      <br />
      <br />
      {m1 ? <br /> : null}
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
                  style={{ opacity: 1 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: c.c1,
                      color: c.c2,
                      border: "solid 5px white",
                      borderRadius: "100px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        maxHeight: "180px",
                        minHeight: "180px",
                      }}
                      image={card.events.image}
                      alt="random"
                    />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div
                        style={{
                          minWidth: "170px",
                          maxHeight: "180px",
                          maxWidth: "170px",
                          minHeight: "170px",
                          marginTop: "-100px",
                        }}
                      >
                        {card.expired == 0 ? (
                          <Canvas
                            text={
                              card.id +
                              " | " +
                              card.name +
                              " | " +
                              card.events.name +
                              " |  " +
                              card.nooftickets
                            }
                            options={{
                              type: "image/jpeg",
                              quality: 1,
                              level: "H",
                              margin: 3,
                              scale: 4,
                              width: 160,
                              color: {
                                dark: c.c1,
                                light: c.c2,
                              },
                            }}
                          />
                        ) : (
                          <img
                            src="/images/expired.png"
                            style={{
                              width: "100%",
                              height: "auto",
                            }}
                          />
                        )}
                      </div>
                    </div>

                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        style={{
                          width: "100%",
                          textAlign: "center",
                          marginTop: "-25px",
                          fontSize: "30px",
                          fontFamily: "Bungee",
                        }}
                        gutterBottom
                        variant="h5"
                        component="h1"
                      >
                        <b> {card.events.name}</b>
                      </Typography>
                      <div style={{ display: "flex" }}>
                        <Typography
                          style={{
                            width: "50%",
                            textAlign: "left",
                            fontFamily: "Bungee",
                          }}
                          gutterBottom
                          variant="h5"
                          component="h2"
                        >
                          {card.nooftickets}{" "}
                          {card.nooftickets > 1 ? "Tickets" : "Ticket"}
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
                          borderColor: props.thisCollege ? c.c4 : c.c3,
                          borderRadius: "5%",
                          backgroundColor: c.c1,
                        }}
                      >
                        <div>
                          <i
                            style={{
                              width: "50%",
                              fontSize: "17px",
                            }}
                          >
                            <b> {card.name} </b>
                          </i>
                          <br />
                          <i
                            style={{
                              width: "50%",
                              fontSize: card.events.type == 1 ? "18px" : "13px",
                            }}
                          >
                            <b>
                              {" "}
                              {card.events.type == 1
                                ? `${card.phno}`
                                : card.usn}{" "}
                            </b>{" "}
                            <b
                              style={{
                                paddingLeft:
                                  card.events.type != 1 ? "100px" : "50px",
                                fontSize: "20px",
                              }}
                            >
                              {" "}
                              ID : {card.id}
                            </b>
                          </i>
                        </div>
                        {card.events.type == 1 ? (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <i
                              style={{
                                width: "50%",
                                fontSize: "15px",
                                fontWeight: 700,
                              }}
                            >
                              Shirt Size :
                            </i>
                            <i
                              style={{
                                width: "50%",
                                fontSize: "15px",
                                fontWeight: 500,
                              }}
                            >
                              {shirtsType[card.shirt]}{" "}
                            </i>
                          </div>
                        ) : null}
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
                        style={{
                          width: "100%",
                          backgroundColor: props.thisCollege ? c.c4 : c.c3,
                          fontFamily: "Bungee",
                        }}
                        onClick={() => {
                          if (card.expired) {
                            window.location.reload();
                          } else validateTheTicket(card.id);
                        }}
                      >
                        {card.expired == 1 ? "Refresh !" : "Validate"}
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
