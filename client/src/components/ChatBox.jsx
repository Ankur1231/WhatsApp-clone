import React, { useContext } from "react";
import {
  Dialog,
  withStyles,
  Box,
  Typography,
  makeStyles,
  List,
  ListItem,
} from "@material-ui/core";

//components
import Menu from "./menu/Menu";
import Chat from "./chat/Chat";
import EmptyChat from "./chat/EmptyChat";
import { UserContext } from "../context/UserProvider";

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
    width: "80%",
    minWidth: 300,
    height: "100%",
  },
});

const ChatBox = ({ classes }) => {
  const classname = useStyles();
  const { person } = useContext(UserContext);

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
        <Box className={classname.rightComponent}>
          {Object.keys(person).length ? <Chat /> : <EmptyChat />}
        </Box>
      </Box>
    </Dialog>
  );
};

export default withStyles(style)(ChatBox);
