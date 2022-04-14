import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import ButtonUI from "./Button";
import * as c from "../../utils/Colors";
import { useRouter } from "next/router";

export default function ReviewCard(props) {
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
          maxWidth: "100px",
          minWidth: "100px",
          cursor: zoom ? "pointer" : "auto",
        }}
        onMouseEnter={() => setZoom(true)}
        onMouseLeave={() => setZoom(false)}
        elevation={zoom ? 4 : 1}
      >
        <CardMedia
          component="img"
          height="120"
          image={props.image}
          alt="Paella dish"
          style={{ maxHeight: 90 }}
        />

        <div style={{ marginTop: "-13px" }}>
          <ButtonUI
            text={props.data.name}
            width="100%"
            color={c.c3}
            status={false}
            size="9px"
            handler={null}
          />
        </div>
      </Card>
    </a>
  );
}
