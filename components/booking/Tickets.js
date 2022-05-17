import * as React from "react";
import AppBar from "@mui/material/AppBar";
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
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import InfoIcon from "@mui/icons-material/Info";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Tickets(props) {
  const router = useRouter();
  const m1 = useMediaQuery("(min-width:600px)");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ height: "10px" }}></div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1
          style={{
            textAlight: "center",
            fontSize: m1 ? "50px" : "35px",
            color: c.c2,
            fontFamily: "Bungee",
          }}
        >
          Events
        </h1>
      </div>
      <br />
      <main>
        <Container>
          <Grid container spacing={4}>
            {props.events &&
              props.events.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: c.c1,
                      color: c.c2,
                      border: "solid 1px white",
                      borderRadius: "100px",
                      fontFamily: "Bungee",
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        // marginTop: "-210px",
                        maxHeight: "200px",
                        minHeight: "200px",
                      }}
                      image={card.image}
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      {/* <Typography gutterBottom variant="h5" component="h2">
                    
                      </Typography> */}
                      <div style={{ display: "flex" }}>
                        <Typography
                          style={{
                            width: "100%",
                            textAlign: "center",
                            fontFamily: "Bungee",
                          }}
                          gutterBottom
                          variant="h6"
                          component={m1 ? "h2" : "h3"}
                        >
                          {card.name}
                        </Typography>
                        {/* <Typography
                          style={{
                            width: "50%",
                            textAlign: "right",
                          }}
                          gutterBottom
                          variant="h5"
                          component="h2"
                        >
                          ₹ {card.price}
                        </Typography> */}
                      </div>
                      <div style={{ display: "flex" }}>
                        <Typography style={{ width: "50%" }}>
                          {" "}
                          {card.date}
                        </Typography>
                        <Typography style={{ width: "50%" }}>
                          {card.timings}
                        </Typography>
                      </div>
                      <br />
                      <Typography
                        style={{
                          textAlign: "center",
                          borderStyle: "outset",
                          borderColor: c.c4,
                          borderRadius: "5%",
                          maxHeight: "127px",
                          overflow: "hidden",
                          padding: "5px",
                        }}
                      >
                        <i>{card.description}</i>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        style={{
                          width: "100%",
                          backgroundColor: c.c4,
                          fontFamily: "Bungee",
                        }}
                        startIcon={card.open1 == 0 ? <InfoIcon /> : null}
                        onClick={() => {
                          if (card.open1 == 0) {
                            return;
                          }
                          if (!props.status) {
                            document.cookie = `whichroute=/book?id=${
                              card.id
                            }; expires=${new Date(9999, 0, 1).toUTCString()}`;
                          } else {
                            Cookies.remove("whichroute");
                          }

                          router.push({
                            pathname: "/book",
                            query: {
                              id: card.id,
                              type: card.type,
                            },
                          });
                        }}
                      >
                        {card.open1 ? "Book Now" : "Coming Soon"}
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
