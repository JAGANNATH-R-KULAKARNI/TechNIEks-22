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
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ShareIcon from "@mui/icons-material/Share";
import { Share } from "@mui/icons-material";
import ModalUI from "./Dialog";

const theme = createTheme();

export default function Details(props) {
  const m1 = useMediaQuery("(min-width:600px)");
  const [modal, modalStatus] = React.useState(false);

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
      {modal ? (
        <ModalUI modalStatus={modalStatus} ticket={props.ticket} />
      ) : null}
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
          <Typography
            component="h1"
            variant="h4"
            style={{ width: "100%", textAlign: "center", fontFamily: "Bungee" }}
          >
            {props.ticket && props.ticket.name}
          </Typography>

          <Typography
            component="h1"
            variant="h5"
            style={{ fontFamily: "Bungee" }}
          >
            ₹ {props.ticket && props.price} / person
          </Typography>
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              endIcon={<ShareIcon />}
              style={{ backgroundColor: c.c3 }}
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert("Link is Copied To Clipboard");
              }}
            >
              Share
            </Button>
            <div style={{ width: "30px" }}></div>
            <Button
              variant="contained"
              endIcon={<AutoStoriesIcon />}
              style={{ backgroundColor: c.c3 }}
              onClick={() => {
                modalStatus(true);
              }}
            >
              Details
            </Button>
          </div>

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
                    color: c.c4,
                    minWidth: m1 ? "370px" : "100%",
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
                    Name
                  </InputLabel>
                  <OutlinedInput
                    id="namebro"
                    type="name"
                    value={props.name}
                    onChange={(e) => {
                      props.setName(e.target.value);
                    }}
                    label="Name"
                    placeholder="Your Name"
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
                      {props.thisCollege ? "USN" : "College"}
                    </InputLabel>
                    <OutlinedInput
                      id="usnbro"
                      type="name"
                      value={props.usn}
                      onChange={(e) => {
                        props.setUsn(e.target.value);
                      }}
                      label="USN"
                      placeholder={
                        props.thisCollege ? "4NI19IS***" : "NIE College"
                      }
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
              </div>
              <br />
              <br />
              <br />
              <br />
              {props.type == 1 ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginLeft: "50px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      minWidth: "100%",
                    }}
                  >
                    <div>
                      <Typography
                        component="h1"
                        variant="h5"
                        style={{
                          fontFamily: "Bungee",
                          textAlign: "center",
                        }}
                      >
                        T-Shirt Size
                      </Typography>
                      <br />
                      <div style={{ marginLeft: "40px" }}>
                        <FormControlLabel
                          control={<Radio style={{ color: "white" }} />}
                          label={
                            <p
                              style={{
                                fontFamily: "Bungee",
                                fontSize: "14px",
                                color: "white",
                              }}
                            >
                              Small
                            </p>
                          }
                          checked={props.shirt == "S" ? true : false}
                          onChange={(e) => {
                            props.setShirt("S");
                          }}
                          style={{
                            minWidth: "140px",
                            backgroundColor:
                              props.shirt == "S" ? c.c4 : "black",
                            color: props.shirt == "S" ? "black" : "white",
                            paddingRight: "10px",
                            borderRadius: "20px",
                          }}
                        />
                        <FormControlLabel
                          control={<Radio style={{ color: "white" }} />}
                          label={
                            <p
                              style={{
                                fontFamily: "Bungee",
                                fontSize: "14px",
                                color: "white",
                              }}
                            >
                              Medium
                            </p>
                          }
                          checked={props.shirt == "M" ? true : false}
                          onChange={(e) => {
                            props.setShirt("M");
                          }}
                          style={{
                            minWidth: "140px",
                            backgroundColor:
                              props.shirt == "M" ? c.c4 : "black",
                            color: props.shirt == "M" ? "black" : "white",
                            paddingRight: "10px",
                            borderRadius: "20px",
                          }}
                        />
                        <br />
                        <FormControlLabel
                          control={<Radio style={{ color: "white" }} />}
                          label={
                            <p
                              style={{
                                fontFamily: "Bungee",
                                fontSize: "14px",
                                color: "white",
                              }}
                            >
                              Large
                            </p>
                          }
                          checked={props.shirt == "L" ? true : false}
                          onChange={(e) => {
                            props.setShirt("L");
                          }}
                          style={{
                            minWidth: "140px",
                            backgroundColor:
                              props.shirt == "L" ? c.c4 : "black",
                            color: props.shirt == "L" ? "black" : "white",
                            paddingRight: "10px",
                            borderRadius: "20px",
                          }}
                        />
                        <FormControlLabel
                          control={<Radio style={{ color: "white" }} />}
                          label={
                            <p
                              style={{
                                fontFamily: "Bungee",
                                fontSize: "14px",
                                color: "white",
                              }}
                            >
                              X Large
                            </p>
                          }
                          checked={props.shirt == "XL" ? true : false}
                          onChange={(e) => {
                            props.setShirt("XL");
                          }}
                          style={{
                            minWidth: "140px",
                            backgroundColor:
                              props.shirt == "XL" ? c.c4 : "black",
                            color: props.shirt == "XL" ? "black" : "white",
                            paddingRight: "10px",
                            borderRadius: "20px",
                          }}
                        />
                        <br />{" "}
                        <FormControlLabel
                          control={<Radio style={{ color: "white" }} />}
                          label={
                            <p
                              style={{
                                fontFamily: "Bungee",
                                fontSize: "14px",
                                color: "white",
                              }}
                            >
                              XX Large
                            </p>
                          }
                          checked={props.shirt == "XXL" ? true : false}
                          onChange={(e) => {
                            props.setShirt("XXL");
                          }}
                          style={{
                            minWidth: "140px",
                            backgroundColor:
                              props.shirt == "XXL" ? c.c4 : "black",
                            color: props.shirt == "XXL" ? "black" : "white",
                            paddingRight: "10px",
                            borderRadius: "20px",
                          }}
                        />
                        <FormControlLabel
                          control={<Radio style={{ color: "white" }} />}
                          label={
                            <p
                              style={{
                                fontFamily: "Bungee",
                                fontSize: "14px",
                                color: "white",
                              }}
                            >
                              XXX Large
                            </p>
                          }
                          checked={props.shirt == "XXXL" ? true : false}
                          onChange={(e) => {
                            props.setShirt("XXXL");
                          }}
                          style={{
                            minWidth: "140px",
                            backgroundColor:
                              props.shirt == "XXXL" ? c.c4 : "black",
                            color: props.shirt == "XXXL" ? "black" : "white",
                            paddingRight: "10px",
                            borderRadius: "20px",
                          }}
                        />
                      </div>
                      <br />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      minWidth: "100%",
                    }}
                  >
                    <div>
                      <Typography
                        component="h1"
                        variant="h5"
                        style={{
                          fontFamily: "Bungee",
                          textAlign: "center",
                        }}
                      >
                        Category
                      </Typography>
                      <br />
                      <div style={{ marginLeft: "40px" }}>
                        <FormControlLabel
                          control={<Radio style={{ color: "white" }} />}
                          label={
                            <p
                              style={{
                                fontFamily: "Bungee",
                                fontSize: "14px",
                                color: "white",
                              }}
                            >
                              Female
                            </p>
                          }
                          checked={props.category == "female" ? true : false}
                          onChange={(e) => {
                            props.setCategory("female");
                          }}
                          style={{
                            minWidth: "140px",
                            backgroundColor:
                              props.category == "female" ? c.c4 : "black",
                            color:
                              props.category == "female" ? "black" : "white",
                            paddingRight: "10px",
                            borderRadius: "20px",
                          }}
                        />
                        <br />
                        <FormControlLabel
                          control={<Radio style={{ color: "white" }} />}
                          label={
                            <p
                              style={{
                                fontFamily: "Bungee",
                                fontSize: "14px",
                                color: "white",
                              }}
                            >
                              Male
                            </p>
                          }
                          checked={props.category == "male" ? true : false}
                          onChange={(e) => {
                            props.setCategory("male");
                          }}
                          style={{
                            minWidth: "140px",
                            backgroundColor:
                              props.category == "male" ? c.c4 : "black",
                            color: props.category == "male" ? "black" : "white",
                            paddingRight: "10px",
                            borderRadius: "20px",
                          }}
                        />
                        <br />

                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <FormControlLabel
                            control={<Radio style={{ color: "white" }} />}
                            label={
                              <p
                                style={{
                                  fontFamily: "Bungee",
                                  fontSize: "14px",
                                  color: "white",
                                }}
                              >
                                Veteren
                              </p>
                            }
                            checked={props.category == "veteren" ? true : false}
                            onChange={(e) => {
                              props.setCategory("veteren");
                            }}
                            style={{
                              minWidth: "140px",
                              backgroundColor:
                                props.category == "veteren" ? c.c4 : "black",
                              color:
                                props.category == "veteren" ? "black" : "white",
                              paddingRight: "10px",
                              borderRadius: "20px",
                            }}
                          />
                        </div>
                      </div>
                      <br />
                    </div>
                  </div>
                </div>
              ) : null}
              <br />

              {props.type == 1 ? (
                <div>
                  {" "}
                  <br />
                  <br />
                </div>
              ) : null}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  minWidth: m1 ? "400px" : "90%",
                  marginTop: props.type == 1 ? "20px" : "0px",
                  marginLeft: props.type == 1 ? "10px" : "0px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {!props.thisCollege ? (
                    <Fab
                      color="primary"
                      aria-label="add"
                      style={{ backgroundColor: c.c3 }}
                      onClick={() => {
                        if (props.no > 1) props.setNo(props.no - 1);
                      }}
                    >
                      <RemoveIcon />
                    </Fab>
                  ) : null}
                  <h2
                    style={{
                      color: c.c2,
                      fontFamily: "Bungee",
                      paddingLeft: "30px",
                      paddingRight: "30px",
                      marginTop: "5px",
                    }}
                  >
                    {`${props.no} Ticket${props.no > 1 ? "s" : ""}`}
                  </h2>
                  {!props.thisCollege ? (
                    <Fab
                      color="primary"
                      aria-label="add"
                      style={{ backgroundColor: c.c3 }}
                      onClick={() => {
                        props.setNo(props.no + 1);
                      }}
                    >
                      <AddIcon />
                    </Fab>
                  ) : null}
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
                      color="primary"
                      style={{ color: c.c4, fontFamily: "Bungee" }}
                      value={props.enjoy}
                      onChange={props.setEnjoy}
                    />
                  }
                  label={
                    <p style={{ fontFamily: "Bungee" }}>
                      I will enjoy TeckNIEks 22
                    </p>
                  }
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
