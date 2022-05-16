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
import ModalUI from "./Dialog";
import Button from "@mui/material/Button";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ShareIcon from "@mui/icons-material/Share";

const theme = createTheme();

export default function Details(props) {
  const m1 = useMediaQuery("(min-width:600px)");
  const [modal, modalStatus] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      {modal ? (
        <ModalUI modalStatus={modalStatus} ticket={props.ticket} />
      ) : null}
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
          {/* <Avatar
            sx={{
              m: 1,
              bgcolor: "secondary.main",
              backgroundColor: c.c4,
            }}
          >
            <ConfirmationNumberIcon />
          </Avatar> */}
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
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                maxWidth: "100%",
                paddingLeft: props.type == 1 ? "5%" : "0%",
                paddingRight: props.type == 1 ? "5%" : "0%",
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

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                maxWidth: "100%",
                paddingLeft: props.type == 1 ? "5%" : "0%",
                paddingRight: props.type == 1 ? "5%" : "0%",
              }}
            >
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
                  {props.thisCollege ? "USN" : "College"}
                </InputLabel>
                <OutlinedInput
                  id="usnbro"
                  type={"name"}
                  value={props.usn}
                  onChange={(e) => {
                    props.setUsn(e.target.value);
                  }}
                  label="name"
                  placeholder={props.thisCollege ? "4NI19IS***" : "NIE College"}
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
            <br />
            {props.type == 1 ? (
              <div
                style={
                  {
                    // display: "flex",
                    // justifyContent: "center",
                    // marginLeft: "50px",
                  }
                }
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
                    <div style={{ marginLeft: "25px" }}>
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
                          minWidth: "100px",
                          backgroundColor: props.shirt == "S" ? c.c4 : "black",
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
                          minWidth: "100px",
                          backgroundColor: props.shirt == "M" ? c.c4 : "black",
                          color: props.shirt == "M" ? "black" : "white",
                          paddingRight: "10px",
                          borderRadius: "20px",
                          marginLeft: "-2px",
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
                          minWidth: "100px",
                          backgroundColor: props.shirt == "L" ? c.c4 : "black",
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
                          minWidth: "100px",
                          backgroundColor: props.shirt == "XL" ? c.c4 : "black",
                          color: props.shirt == "XL" ? "black" : "white",
                          paddingRight: "10px",
                          borderRadius: "20px",
                          marginLeft: "-2px",
                        }}
                      />
                      <br />{" "}
                      <FormControlLabel
                        control={<Radio style={{ color: "white" }} />}
                        label={
                          <p
                            style={{
                              fontFamily: "Bungee",
                              fontSize: "11px",
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
                          minWidth: "100px",
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
                              fontSize: "11px",
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
                          minWidth: "100px",
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
                    <div style={{ marginLeft: "0px" }}>
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
                          minWidth: "100px",
                          backgroundColor:
                            props.category == "female" ? c.c4 : "black",
                          color: props.category == "female" ? "black" : "white",
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
                            Male
                          </p>
                        }
                        checked={props.category == "male" ? true : false}
                        onChange={(e) => {
                          props.setCategory("male");
                        }}
                        style={{
                          minWidth: "100px",
                          backgroundColor:
                            props.category == "male" ? c.c4 : "black",
                          color: props.category == "male" ? "black" : "white",
                          paddingRight: "10px",
                          borderRadius: "20px",
                        }}
                      />
                      <br />

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                minWidth: "90%",
                maxWidth: "90%",
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
                    size="medium"
                  >
                    <RemoveIcon />
                  </Fab>
                ) : null}
                <br />
                <br />

                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div>
                    <h2
                      style={{
                        color: c.c2,
                        fontFamily: "Bungee",
                        paddingLeft: "30px",
                        paddingRight: "30px",
                        marginTop: "5px",
                        textAlign: "center",
                      }}
                    >
                      {`${props.no}`}
                    </h2>
                    <h4
                      style={{
                        color: c.c2,
                        fontFamily: "Bungee",
                        paddingLeft: "30px",
                        paddingRight: "30px",
                        textAlign: "center",
                      }}
                    >
                      {`Ticket${props.no > 1 ? "s" : ""}`}
                    </h4>
                  </div>
                </div>

                {!props.thisCollege ? (
                  <Fab
                    color="primary"
                    aria-label="add"
                    style={{ backgroundColor: c.c3 }}
                    onClick={() => {
                      props.setNo(props.no + 1);
                    }}
                    size="medium"
                  >
                    <AddIcon />
                  </Fab>
                ) : null}
              </div>
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
