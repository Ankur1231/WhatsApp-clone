import React, { useContext } from "react";
import { AppBar, Toolbar, makeStyles, Box } from "@material-ui/core";

//components
import Login from "./account/Login";
import ChatBox from "./ChatBox";
import { AccountContext } from "../context/AccountProvider";

const useStyles = makeStyles({
  loginHeader: {
    height: 200,
    backgroundColor: "#00bfa5",
    boxShadow: "none",
  },
  header: {
    height: 115,
    backgroundColor: "#00bfa5",
    boxShadow: "none",
  },
  component: {
    height: "100vh",
    backgroundColor: "#DCDCDC",
  },
});

const Messenger = () => {
  const classes = useStyles();

  const { account } = useContext(AccountContext);

  return (
    <Box className={classes.component}>
      <AppBar className={account ? classes.header : classes.loginHeader}>
        <Toolbar></Toolbar>
      </AppBar>
      {account ? <ChatBox /> : <Login />}
    </Box>
  );
};

export default Messenger;
