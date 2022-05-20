import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as c from "../../utils/Colors";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function ScrollDialog(props) {
  const [open, setOpen] = React.useState(true);
  const [scroll, setScroll] = React.useState("paper");
  const m1 = useMediaQuery("(min-width:430px)");
  //   const handleClickOpen = (scrollType) => () => {
  //     setOpen(true);
  //     setScroll(scrollType);
  //   };

  const handleClose = () => {
    setOpen(false);
    props.modalStatus(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        style={{ marginTop: "50px" }}
      >
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            border: "5px solid white",
            borderRadius: "20px",
          }}
        >
          <DialogTitle
            id="scroll-dialog-title"
            style={{
              textAlign: "center",
              fontFamily: "Bungee",
              textDecoration: "underline",
            }}
          >
            {props.ticket.name}
          </DialogTitle>
          <DialogContent dividers={scroll === "paper"}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
              style={{
                color: "white",
                fontFamily: "Bungee",
                fontSize: m1 ? "14px" : "10px",
                lineHeight: 1.7,
                wordSpacing: "6px",
              }}
            >
              {'"'} {props.ticket.description}
              {'"'}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              style={{ backgroundColor: c.c4, color: "white" }}
            >
              OK
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
