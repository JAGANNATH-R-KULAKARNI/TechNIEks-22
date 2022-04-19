import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as c from "../../utils/Colors";
import useMediaQuery from "@mui/material/useMediaQuery";
import { supabase } from "../../utils/SupabaseClient";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const theme = createTheme();

export default function SignUp() {
  const m1 = useMediaQuery("(min-width:600px)");
  const [email, setEmail] = React.useState("");
  const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const [openAlert, setOpenAlert] = React.useState(false);
  const [alertType, setAlertType] = React.useState("success");
  const [alertMsg, setAlert] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  const messageAlert = async (msg, type) => {
    setOpenAlert(true);
    setAlert(msg);
    setAlertType(type);
    setTimeout(() => {
      setOpenAlert(false);
      setAlert(null);
    }, 5000);
    return;
  };

  const signUpHandler = async () => {
    setSent(false);
    setLoading(false);

    if (!email.match(validEmail)) {
      messageAlert("Email should be valid", "error");
      return;
    }
    setSent(false);
    setLoading(true);

    const { error, data } = await supabase.auth.signIn(
      {
        email,
      }
      // {
      //   redirectTo:
      //     window.location.href.substr(0, window.location.href.length - 8) +
      //     "/book",
      // }
    );

    if (error) {
      messageAlert("Something Went Wrong", "error");
      setLoading(false);
      setSent(false);
    } else {
      messageAlert(`Link has been sent to ${email}`, "success");
      setLoading(false);
      setSent(true);
    }
  };

  async function signInWithGoogle() {
    try {
      const { user, session, error } = await supabase.auth.signIn(
        {
          provider: "google",
        },
        {
          redirectTo: "https://www.amazon.in/",
        }
      );
      if (error) throw error;

      if (user) {
        console.log("user details");
        console.log(user);
        alert("here");
        // router.push("/events");
        router.reload(window.location.pathname);
      }
    } catch (error) {
      console.error(error.error_description || error.message);
    }
  }

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
          <Snackbar
            open={openAlert}
            autoHideDuration={3000}
            onClose={() => setOpenAlert(false)}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            style={{
              width: m1 ? "20%" : "90%",
              paddingLeft: m1 ? "0%" : "10%",
              textAlign: "center",
              paddingTop: m1 ? "3%" : "14%",
            }}
          >
            <Alert
              onClose={() => setOpenAlert(false)}
              severity={alertType}
              sx={{ width: "100%", textAlign: "center", fontFamily: "Bungee" }}
            >
              {!m1 ? <p style={{ fontSize: "10px" }}>{alertMsg}</p> : alertMsg}
            </Alert>
          </Snackbar>
          <br />
          {loading ? (
            <div>
              {sent ? (
                <CheckCircleIcon
                  style={{
                    width: m1 ? "60px" : "50px",
                    height: m1 ? "60px" : "50px",
                    color: c.c1,
                  }}
                />
              ) : (
                <CircularProgress color="secondary" style={{ color: c.c1 }} />
              )}
            </div>
          ) : (
            <Avatar
              sx={{
                m: 1,
                bgcolor: "secondary.main",
                backgroundColor: c.c4,
              }}
            >
              <LockOutlinedIcon />
            </Avatar>
          )}
          <Typography
            component={m1 ? "h1" : "h3"}
            variant={m1 ? "h5" : "h6"}
            style={{ fontFamily: "Bungee" }}
          >
            {loading == false && sent == false && "Sign Up/In"}
            {sent && "Check Your Email"}
          </Typography>
          {/* {m1 ? <br /> : null} */}
          <Box component="form" noValidate sx={{ mt: 3 }}>
            {/* <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="/images/google.webp"
                alt="Google"
                style={{ width: "200px", height: "100px" }}
              />
            </div> */}
            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: c.c4,
                "&:hover": {
                  backgroundColor: c.c4,
                },
                fontFamily: "Bungee",
              }}
              onClick={signInWithGoogle}
            >
              Sign In with Google
            </Button>
          </Box>
          <br />
          <br />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
