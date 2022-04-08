import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as c from "../../utils/Colors";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import useMediaQuery from "@mui/material/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { SettingsSystemDaydreamOutlined } from "@mui/icons-material";
import { supabase } from "../../utils/SupabaseClient";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useRouter } from "next/router";
import absoluteUrl from "next-absolute-url";

const theme = createTheme();

export default function Details(props) {
  const m1 = useMediaQuery("(min-width:600px)");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
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
              backgroundColor: c.c3,
            }}
          >
            <ConfirmationNumberIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {props.ticket && props.ticket.name}
          </Typography>

          <Typography component="h4" variant="h6">
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
                  minWidth: m1 ? "370px" : "125%",
                }}
                sx={{
                  input: {
                    color: c.c3,
                  },
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": {
                      borderColor: c.c3,
                    },
                  },
                  "& .MuiOutlinedInput-root:hover": {
                    "& > fieldset": {
                      borderColor: c.c3,
                    },
                  },
                  "& .MuiFormLabel-root": { color: c.c3, fontWeight: 100 },
                }}
              >
                <InputLabel htmlFor="outlined-adornment-password">
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
                  placeholder="Benedict Prajwal"
                  sx={{
                    input: {
                      color: c.c3,
                    },
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": {
                        borderColor: c.c3,
                      },
                    },
                    "& .MuiOutlinedInput-root:hover": {
                      "& > fieldset": {
                        borderColor: c.c3,
                      },
                    },
                    "& .MuiFormLabel-root": { color: c.c3, fontWeight: 100 },
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
                  minWidth: m1 ? "370px" : "125%",
                }}
                sx={{
                  input: {
                    color: c.c3,
                  },
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": {
                      borderColor: c.c3,
                    },
                  },
                  "& .MuiOutlinedInput-root:hover": {
                    "& > fieldset": {
                      borderColor: c.c3,
                    },
                  },
                  "& .MuiFormLabel-root": { color: c.c3, fontWeight: 100 },
                }}
              >
                <InputLabel htmlFor="outlined-adornment-password">
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
                      color: c.c3,
                    },
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": {
                        borderColor: c.c3,
                      },
                    },
                    "& .MuiOutlinedInput-root:hover": {
                      "& > fieldset": {
                        borderColor: c.c3,
                      },
                    },
                    "& .MuiFormLabel-root": { color: c.c3, fontWeight: 100 },
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
                  minWidth: m1 ? "370px" : "125%",
                }}
                sx={{
                  input: {
                    color: c.c3,
                  },
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": {
                      borderColor: c.c3,
                    },
                  },
                  "& .MuiOutlinedInput-root:hover": {
                    "& > fieldset": {
                      borderColor: c.c3,
                    },
                  },
                  "& .MuiFormLabel-root": { color: c.c3, fontWeight: 100 },
                }}
              >
                <InputLabel htmlFor="outlined-adornment-password">
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
                      color: c.c3,
                    },
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": {
                        borderColor: c.c3,
                      },
                    },
                    "& .MuiOutlinedInput-root:hover": {
                      "& > fieldset": {
                        borderColor: c.c3,
                      },
                    },
                    "& .MuiFormLabel-root": { color: c.c3, fontWeight: 100 },
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
                      style={{ color: c.c1 }}
                      value={props.enjoy}
                      onChange={props.setEnjoy}
                    />
                  }
                  label="I will enjoy TeckNIEks'22"
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
