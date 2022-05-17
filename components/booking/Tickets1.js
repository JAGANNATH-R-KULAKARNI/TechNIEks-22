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
      <div style={{ display: "flex", justifyContent: "center" }}></div>
      <br />
      <div style={{ height: m1 ? "500px" : "300px" }}></div>
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
                      <div
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
                        <Typography>
                          <i>{card.description}</i>
                        </Typography>
                      </div>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        style={{
                          width: "100%",
                          backgroundColor: c.c4,
                          fontFamily: "Bungee",
                        }}
                        startIcon={card.open == 0 ? <InfoIcon /> : null}
                        onClick={() => {
                          if (card.open == 0) {
                            return;
                          }

                          document.cookie = `techniekseventid=${
                            card.id
                          }; expires=${new Date(9999, 0, 1).toUTCString()}`;
                          router.push({
                            pathname: "/book",
                            query: { id: card.id },
                          });
                        }}
                      >
                        {card.open ? "Book Now" : "Coming Soon"}
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
