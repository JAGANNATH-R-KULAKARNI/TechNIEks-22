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
import useMediaQuery from "@mui/material/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { SettingsSystemDaydreamOutlined } from "@mui/icons-material";

const theme = createTheme();

export default function SignUp() {
  const m1 = useMediaQuery("(min-width:600px)");
  const [email, setEmail] = React.useState("");

  const signUpHandler = () => {
    alert("here");
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component={m1 ? "h1" : "h3"} variant={m1 ? "h5" : "h6"}>
            Sign Up/In
          </Typography>
          {m1 ? <br /> : null}
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
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
                      borderColor: c.c1,
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
                  Email
                </InputLabel>
                <OutlinedInput
                  id="emailSignUp"
                  type={"email"}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  label="Email"
                  placeholder="xyz@gmail.com"
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
                    "& .MuiFormLabel-root": { color: c.c3, fontWeight: 100 },
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
            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: c.c3,
                "&:hover": {
                  backgroundColor: c.c3,
                },
              }}
              onClick={signUpHandler}
            >
              Send Me Magic Link
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
