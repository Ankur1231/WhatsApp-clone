import React from "react";
import { Dialog, withStyles, Box, Typography, makeStyles, List, ListItem } from "@material-ui/core";

//components
import Menu from "./menu/Menu";

const style = {
  dialogPaper: {
    height: "95%",
    width: "91%",
    boxShadow: "none",
    borderRadius: 0,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
};

const useStyles = makeStyles({
  component: {
    display: "flex",
  },
  leftComponent: {
    minWidth: 380,
  },
  rightComponent: {
    borderLeft: `1px solid rgba(0,0,0,0.14)`,
  },
});

const ChatBox = ({ classes }) => {
  const classname = useStyles();

  return (
    <Dialog
      classes={{ paper: classes.dialogPaper }}
      open={true}
      BackdropProps={{ style: { backgroundColor: "unset" } }}
    >
      <Box className={classname.component}>
        <Box className={classname.leftComponent}>
          <Menu />
        </Box>
        <Box className={classname.rightComponent}>hi</Box>
      </Box>
    </Dialog>
  );
};

export default withStyles(style)(ChatBox);
