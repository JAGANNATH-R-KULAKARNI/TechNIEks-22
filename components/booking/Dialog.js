import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as c from "../../utils/Colors";

export default function ScrollDialog(props) {
  const [open, setOpen] = React.useState(true);
  const [scroll, setScroll] = React.useState("paper");

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
        <DialogTitle id="scroll-dialog-title" style={{ textAlign: "center" }}>
          {props.ticket.name}
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
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
      </Dialog>
    </div>
  );
}
