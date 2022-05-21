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
import Paper from "@mui/material/Paper";

export default function CarddBro(props) {
  const m1 = useMediaQuery("(min-width:600px)");
  const action = (
    <Button color="secondary" size="small">
      lorem ipsum dolorem
    </Button>
  );

  return (
    <Card
      sx={{
        maxWidth: 250,
        minWidth: m1 ? 250 : "20%",
        maxHeight: m1 ? 580 : 475,
        borderTopLeftRadius: props.code == 1 ? "100px" : "0px",
        borderBottomLeftRadius: props.code == 1 ? "15px" : "0px",
        borderTopRightRadius: props.code == 5 ? "100px" : "0px",
        borderBottomRightRadius: props.code == 5 ? "15px" : "0px",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height={m1 ? "400" : "360"}
        width="auto"
        image={props.link}
      />
      <CardContent>
        {m1 ? (
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ fontFamily: "inherit", textAlign: "center" }}
          >
            {props.name}
          </Typography>
        ) : null}
        {m1 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Paper
              style={{
                height: "60px",
                width: "98%",
                backgroundColor: "black",
                borderRadius: "20px",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontSize: "12px",
                  textAlign: "center",
                }}
              >
                {`${props.des1} &`}
              </p>
              <p
                style={{
                  color: "white",
                  fontSize: "12px",
                  textAlign: "center",
                  marginTop: "-10px",
                }}
              >
                {props.des2}
              </p>
            </Paper>
          </div>
        ) : null}

        {/* {m1 ? (
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
        ) : null} */}
        <div
          style={{
            display: m1 ? "flex" : "block",
            justifyContent: "center",
            bottom: 0,
            paddingTop: "10px",
          }}
        >
          <a
            href={props.linked}
            passHref={true}
            rel="noreferrer"
            target="_blank"
          >
            <LinkedInIcon
              style={{ fontSize: "35px" }}
              className={styles.footer}
            />
          </a>
          <a
            href={props.insta}
            passHref={true}
            rel="noreferrer"
            target="_blank"
          >
            <InstagramIcon
              style={{ fontSize: "35px" }}
              className={styles.footer}
            />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
