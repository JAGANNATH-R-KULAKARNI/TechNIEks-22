import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import UserD from "./User";
import ModifyUI from "./Modify";
import Review from "./Review";
import * as c from "../../utils/Colors";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ShareIcon from "@mui/icons-material/Share";
import { Share } from "@mui/icons-material";
import ModalUI from "./Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Radio from "@mui/material/Radio";

const steps = ["User", "Modify", "Review"];

const theme = createTheme();

export default function Checkout(props) {
  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <UserD
            ticket={props.ticket}
            name={props.name}
            usn={props.usn}
            setName={props.setName}
            setUsn={props.setUsn}
            messageAlert={props.messageAlert}
            thisCollege={props.thisCollege}
          />
        );
      case 1:
        return (
          <ModifyUI
            no={props.no}
            setNo={props.setNo}
            totalAmount={props.totalAmount}
          />
        );
      case 2:
        return <Review />;
      default:
        throw new Error("Unknown step");
    }
  }

  const [activeStep, setActiveStep] = React.useState(0);
  const [modal, modalStatus] = React.useState(false);
  const m1 = useMediaQuery("(min-width:600px)");

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      {modal ? (
        <ModalUI modalStatus={modalStatus} ticket={props.ticket} />
      ) : null}
      <CssBaseline />

      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{
            my: { xs: 3, md: 6 },
            p: { xs: 2, md: 3 },
            backgroundColor: c.c2,
            color: c.c1,
            borderRadius: "50px",
          }}
        >
          <Typography
            component="h2"
            variant={m1 ? "h4" : "h5"}
            align="center"
            style={{
              backgroundColor: c.c1,
              color: c.c2,
              borderRadius: "50px",
              paddingLeft: "20%",
              paddingRight: "20%",
              textAlign: "center",
              fontFamily: "Bungee",
            }}
          >
            {props.ticket.name}
          </Typography>
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              endIcon={m1 ? <ShareIcon /> : null}
              style={{
                backgroundColor: c.c3,
                borderBottomLeftRadius: m1 ? "20px" : "5px",
                borderTopRightRadius: m1 ? "20px" : "5px",
                fontSize: "12px",
                maxHeight: "35px",
              }}
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert("Link is Copied To Clipboard");
              }}
            >
              Share
            </Button>
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "center",
                marginTop: "-25px",
              }}
            >
              {m1 ? (
                <h4 style={{ fontSize: "20px" }}>
                  ₹{" "}
                  <span
                    style={{
                      fontSize: "40px",
                      fontWeight: 900,
                    }}
                  >
                    {props.price}
                  </span>{" "}
                  / Person
                </h4>
              ) : (
                <h4 style={{ fontSize: "20px", textAlign: "center" }}>
                  ₹{" "}
                  <span
                    style={{
                      fontSize: "35px",
                      fontWeight: 900,
                    }}
                  >
                    {props.price}
                  </span>{" "}
                  <br />
                  {"/ Person"}
                </h4>
              )}
            </div>
            <Button
              variant="contained"
              endIcon={m1 ? <AutoStoriesIcon /> : null}
              style={{
                backgroundColor: c.c3,
                borderTopLeftRadius: m1 ? "20px" : "5px",
                borderBottomRightRadius: m1 ? "20px" : "5px",
                fontSize: "12px",
                maxHeight: "35px",
              }}
              onClick={() => {
                modalStatus(true);
              }}
            >
              Details
            </Button>
          </div>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: "7px",
                    borderRadius: "15px",
                    paddingRight: "10px",
                  }}
                >
                  <span style={{ color: c.c2 }}>{label}</span>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{
                      mt: 3,
                      ml: 1,
                      backgroundColor: c.c1,
                      borderRadius: "10px",
                    }}
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
