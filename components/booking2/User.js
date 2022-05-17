import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
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
import { PeopleSharp, Share } from "@mui/icons-material";
import ModalUI from "./Dialog";

export default function UserForm(props) {
  const m1 = useMediaQuery("(min-width:600px)");

  return (
    <React.Fragment>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={props.ticket.image}
          style={{
            width: "auto",
            height: "150px",
            borderRadius: "50px",
          }}
        />
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <FormControl
          variant="outlined"
          style={{
            color: c.c1,
            minWidth: m1 ? "370px" : "100%",
          }}
          sx={{
            input: {
              color: c.c1,
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
            "& .MuiFormLabel-root": { color: c.c1, fontWeight: 100 },
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
            id="name book"
            type="name"
            value={props.name}
            onChange={(e) => {
              if (e.target.value.length > 20) return;

              props.setName(e.target.value);
            }}
            label="Name"
            placeholder="Jagannath R K"
            sx={{
              fontFamily: "Bungee",
              input: {
                color: c.c1,
              },
              borderColor: c.c1,
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
              "& .MuiFormLabel-root": {
                color: c.c1,
                fontWeight: 100,
              },
              "& .MuiFormLabel-root&:hover": {
                color: c.c1,
                fontWeight: 100,
              },
              "& label.Mui-focused": {
                color: c.c1,
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: c.c1,
                },
              },
            }}
          />
        </FormControl>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <FormControl
          variant="outlined"
          style={{
            color: c.c1,
            minWidth: m1 ? "370px" : "100%",
          }}
          sx={{
            input: {
              color: c.c1,
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
            "& .MuiFormLabel-root": { color: c.c1, fontWeight: 100 },
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
              if (e.target.value.length > 20) return;
              props.setUsn(e.target.value);
            }}
            label="Name"
            placeholder={props.thisCollege ? "4NI19IS***" : "NIE College"}
            sx={{
              fontFamily: "Bungee",
              input: {
                color: c.c1,
              },
              borderColor: c.c1,
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
              "& .MuiFormLabel-root": {
                color: c.c1,
                fontWeight: 100,
              },
              "& .MuiFormLabel-root&:hover": {
                color: c.c1,
                fontWeight: 100,
              },
              "& label.Mui-focused": {
                color: c.c1,
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: c.c1,
                },
              },
            }}
          />
        </FormControl>
      </div>
    </React.Fragment>
  );
}
