import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import useMediaQuery from "@mui/material/useMediaQuery";
import ButtonUI from "./Button";
import * as c from "../../utils/Colors";

export default function ReviewCard(props) {
  const m1 = useMediaQuery("(min-width:430px)");

  const [zoom, setZoom] = React.useState(false);

  return (
    <a
      href={props.data.route}
      style={{
        textDecoration: "none",
      }}
    >
      <Card
        sx={{
          maxWidth: 200,
          minWidth: m1 ? "300px" : "250px",
          cursor: zoom ? "pointer" : "auto",
        }}
        onMouseEnter={() => setZoom(true)}
        onMouseLeave={() => setZoom(false)}
        elevation={zoom ? 10 : 1}
      >
        <CardMedia
          component="img"
          height="180"
          image={props.image}
          alt="Paella dish"
          style={{ maxHeight: 194 }}
        />

        <ButtonUI
          text={props.data.name}
          width="100%"
          color={c.c3}
          status={false}
          size="10px"
          handler={null}
        />
      </Card>
    </a>
  );
}
