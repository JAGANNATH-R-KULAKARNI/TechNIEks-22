import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import styles from "../styles/Footer.module.css";

export default function CarddBro(props) {
  const m1 = useMediaQuery("(min-width:600px)");

  return (
    <Card
      sx={{
        maxWidth: 300,
        minWidth: m1 ? 300 : "20%",
        borderTopLeftRadius: props.code == 1 ? "100px" : "0px",
        borderBottomLeftRadius: props.code == 1 ? "50px" : "0px",
        borderTopRightRadius: props.code == 5 ? "100px" : "0px",
        borderBottomRightRadius: props.code == 5 ? "50px" : "0px",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="400"
        width="auto"
        image={props.link}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ fontFamily: "inherit" }}
        >
          {props.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{
            fontFamily: "italic",
            fontWeight: 900,
            maxHeight: "50px",
            minHeight: "50px",
          }}
        >
          <b style={{ fontSize: "15px" }}>“ </b>
          <i>{props.quote}</i>
          <b style={{ fontSize: "15px" }}> ”</b>
        </Typography>
        <div
          style={{
            display: m1 ? "flex" : "block",
            justifyContent: "center",
            bottom: 0,
          }}
        >
          <LinkedInIcon
            style={{ fontSize: "35px" }}
            className={styles.footer}
          />
          <InstagramIcon
            style={{ fontSize: "35px" }}
            className={styles.footer}
          />
        </div>
      </CardContent>
    </Card>
  );
}
