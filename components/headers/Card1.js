import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import useMediaQuery from "@mui/material/useMediaQuery";
import ButtonUI from "./Button";
import * as c from "../../utils/Colors";
import { useRouter } from "next/router";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ReviewCard(props) {
  const router = useRouter();
  const m1 = useMediaQuery("(min-width:430px)");
  const m2 = useMediaQuery("(min-width:700px)");
  const m3 = useMediaQuery("(min-width:1000px)");
  const m4 = useMediaQuery("(min-width:1300px)");
  const m5 = useMediaQuery("(min-width:1700px)");
  const [zoom, setZoom] = React.useState(false);

  const viewProduct = (route) => {
    router.push(`/product/${route}`);
  };

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
