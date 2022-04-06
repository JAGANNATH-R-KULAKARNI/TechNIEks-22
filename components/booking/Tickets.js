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
import { borderColor } from "@mui/system";

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
            color: c.c3,
          }}
        >
          Events
        </h1>
      </div>

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
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        // marginTop: "-210px",
                        maxHeight: "200px",
                      }}
                      image={card.image}
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      {/* <Typography gutterBottom variant="h5" component="h2">
                    
                      </Typography> */}
                      <div style={{ display: "flex" }}>
                        <Typography
                          style={{ width: "50%", textAlign: "left" }}
                          gutterBottom
                          variant="h5"
                          component="h2"
                        >
                          {card.name}
                        </Typography>
                        <Typography
                          style={{ width: "50%", textAlign: "right" }}
                          gutterBottom
                          variant="h5"
                          component="h2"
                        >
                          ₹ {card.price}
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
                      <Typography
                        style={{
                          textAlign: "center",
                          borderStyle: "outset",
                          borderColor: c.c3,
                          borderRadius: "5%",
                        }}
                      >
                        <i>{card.description}</i>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        style={{ width: "100%", backgroundColor: c.c1 }}
                        onClick={() =>
                          router.push({
                            pathname: "/book",
                            query: { id: card.id },
                          })
                        }
                      >
                        Book Now
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
