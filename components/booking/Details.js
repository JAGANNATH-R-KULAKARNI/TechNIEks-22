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
          <Typography component="h1" variant="h3">
            {props.ticket && props.ticket.name}
          </Typography>

          <Typography component="h1" variant="h4">
            ₹ {props.ticket && props.ticket.price} / person
          </Typography>
          <br />
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <div
                style={{
                  paddingLeft: "7%",
                }}
              >
                <FormControl
                  variant="outlined"
                  style={{
                    color: c.c1,
                    minWidth: m1 ? "370px" : "100%",
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
                        borderColor: c.c1,
                      },
                    },
                    "& .MuiFormLabel-root": { color: c.c3, fontWeight: 100 },
                  }}
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Name
                  </InputLabel>
                  <OutlinedInput
                    id="emailSignUp"
                    type="name"
                    value={props.name}
                    onChange={(e) => {
                      props.setName(e.target.value);
                    }}
                    label="Name"
                    placeholder="Jagannath R K"
                    sx={{
                      input: {
                        color: c.c3,
                      },
                      borderColor: c.c3,
                      "& .MuiOutlinedInput-root": {
                        "& > fieldset": {
                          borderColor: c.c3,
                        },
                      },
                      "& .MuiOutlinedInput-root:hover": {
                        "& > fieldset": {
                          borderColor: c.c1,
                        },
                      },
                      "& .MuiFormLabel-root": {
                        color: c.c3,
                        fontWeight: 100,
                      },
                      "& .MuiFormLabel-root&:hover": {
                        color: c.c3,
                        fontWeight: 100,
                      },
                      "& label.Mui-focused": {
                        color: c.c3,
                      },
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: c.c3,
                        },
                      },
                    }}
                  />
                </FormControl>
              </div>
              <br />
              <br />
              <br />
              <div style={{}}>
                <div
                  style={{
                    paddingLeft: "8%",
                  }}
                >
                  <FormControl
                    variant="outlined"
                    style={{
                      color: c.c1,
                      minWidth: m1 ? "370px" : "90%",
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
                          borderColor: c.c1,
                        },
                      },
                      "& .MuiFormLabel-root": { color: c.c3, fontWeight: 100 },
                    }}
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      USN
                    </InputLabel>
                    <OutlinedInput
                      id="emailSignUp"
                      type="name"
                      value={props.usn}
                      onChange={(e) => {
                        props.setUsn(e.target.value);
                      }}
                      label="USN"
                      placeholder="4NI19IS***"
                      sx={{
                        input: {
                          color: c.c3,
                        },
                        borderColor: c.c3,
                        "& .MuiOutlinedInput-root": {
                          "& > fieldset": {
                            borderColor: c.c3,
                          },
                        },
                        "& .MuiOutlinedInput-root:hover": {
                          "& > fieldset": {
                            borderColor: c.c1,
                          },
                        },
                        "& .MuiFormLabel-root": {
                          color: c.c3,
                          fontWeight: 100,
                        },
                        "& .MuiFormLabel-root&:hover": {
                          color: c.c3,
                          fontWeight: 100,
                        },
                        "& label.Mui-focused": {
                          color: c.c3,
                        },
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused fieldset": {
                            borderColor: c.c3,
                          },
                        },
                      }}
                    />
                  </FormControl>
                </div>
              </div>
              <br />
              <br />
              <br />
              <div>
                <div
                  style={{
                    paddingLeft: "8%",
                  }}
                >
                  <FormControl
                    variant="outlined"
                    style={{
                      color: c.c1,
                      minWidth: m1 ? "370px" : "90%",
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
                          borderColor: c.c1,
                        },
                      },
                      "& .MuiFormLabel-root": { color: c.c3, fontWeight: 100 },
                    }}
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      Tickets
                    </InputLabel>
                    <OutlinedInput
                      id="eqssmsqaiwswqp"
                      type="number"
                      value={props.no}
                      onChange={(e) => {
                        if (e.target.value >= 1) props.setNo(e.target.value);
                      }}
                      label="Number"
                      placeholder="Number Of Tickets"
                      sx={{
                        input: {
                          color: c.c3,
                        },
                        borderColor: c.c3,
                        "& .MuiOutlinedInput-root": {
                          "& > fieldset": {
                            borderColor: c.c3,
                          },
                        },
                        "& .MuiOutlinedInput-root:hover": {
                          "& > fieldset": {
                            borderColor: c.c1,
                          },
                        },
                        "& .MuiFormLabel-root": {
                          color: c.c3,
                          fontWeight: 100,
                        },
                        "& .MuiFormLabel-root&:hover": {
                          color: c.c3,
                          fontWeight: 100,
                        },
                        "& label.Mui-focused": {
                          color: c.c3,
                        },
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused fieldset": {
                            borderColor: c.c3,
                          },
                        },
                      }}
                    />
                  </FormControl>
                </div>
              </div>

              <Grid
                item
                xs={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      value="allowExtraEmails"
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
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
