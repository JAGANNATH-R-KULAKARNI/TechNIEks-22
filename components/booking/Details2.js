import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as c from "../../utils/Colors";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import useMediaQuery from "@mui/material/useMediaQuery";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const theme = createTheme();

export default function Details(props) {
  const m1 = useMediaQuery("(min-width:600px)");
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <br />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              m: 1,
              bgcolor: "secondary.main",
              backgroundColor: c.c4,
            }}
          >
            <ConfirmationNumberIcon />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            style={{ fontFamily: "Bungee" }}
          >
            {props.ticket && props.ticket.name}
          </Typography>

          <Typography
            component="h4"
            variant="h6"
            style={{ fontFamily: "Bungee" }}
          >
            ₹ {props.ticket && props.ticket.price} / person
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <FormControl
                variant="outlined"
                style={{
                  color: c.c1,
                  minWidth: m1 ? "370px" : "100%",
                }}
                sx={{
                  input: {
                    color: c.c4,
                    fontFamily: "Bungee",
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
                  "& .MuiFormLabel-root": { color: c.c4, fontWeight: 100 },
                  fontFamily: "Bungee",
                }}
              >
                <InputLabel
                  htmlFor="outlined-adornment-password"
                  style={{ fontFamily: "Bungee" }}
                >
                  Name
                </InputLabel>
                <OutlinedInput
                  id="namebro"
                  type="name"
                  value={props.name}
                  onChange={(e) => {
                    props.setName(e.target.value);
                  }}
                  label="name"
                  placeholder="Jagannath R Kulakarni"
                  sx={{
                    input: {
                      color: c.c2,
                      fontFamily: "Bungee",
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
                    fontFamily: "Bungee",
                  }}
                />
              </FormControl>
            </div>
            <div style={{ height: "10px" }}></div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <FormControl
                variant="outlined"
                style={{
                  color: c.c1,
                  minWidth: m1 ? "370px" : "100%",
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
                  "& .MuiFormLabel-root": { color: c.c4, fontWeight: 100 },
                  fontFamily: "Bungee",
                }}
              >
                <InputLabel
                  htmlFor="outlined-adornment-password"
                  style={{ fontFamily: "Bungee" }}
                >
                  USN
                </InputLabel>
                <OutlinedInput
                  id="usnbro"
                  type={"name"}
                  value={props.usn}
                  onChange={(e) => {
                    props.setUsn(e.target.value);
                  }}
                  label="name"
                  placeholder="4NI19IS***"
                  sx={{
                    input: {
                      color: c.c2,
                      fontFamily: "Bungee",
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
                    fontFamily: "Bungee",
                  }}
                />
              </FormControl>
            </div>
            <div style={{ height: "10px" }}></div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <FormControl
                variant="outlined"
                style={{
                  color: c.c1,
                  minWidth: m1 ? "370px" : "100%",
                  fontFamily: "Bungee",
                }}
                sx={{
                  input: {
                    color: c.c4,
                    fontFamily: "Bungee",
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
                  "& .MuiFormLabel-root": { color: c.c4, fontWeight: 100 },
                  fontFamily: "Bungee",
                }}
              >
                <InputLabel
                  htmlFor="outlined-adornment-password"
                  style={{ fontFamily: "Bungee" }}
                >
                  Tickets
                </InputLabel>
                <OutlinedInput
                  id="ticketsbro"
                  type="number"
                  value={props.no}
                  onChange={(e) => {
                    if (e.target.value.length > 0 && e.target.value < 1)
                      props.setNo(1);
                    else props.setNo(e.target.value);
                  }}
                  label="Tickets"
                  placeholder="Number Of Tickets"
                  sx={{
                    input: {
                      color: c.c2,
                      fontFamily: "Bungee",
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
                    fontFamily: "Bungee",
                  }}
                />
              </FormControl>
            </div>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      style={{ color: c.c4 }}
                      value={props.enjoy}
                      onChange={props.setEnjoy}
                    />
                  }
                  label={
                    <p style={{ fontFamily: "Bungee" }}>
                      {"I will enjoy TeckNIEks'22"}
                    </p>
                  }
                />
              </Grid>
            </Grid>
            <br />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
