import React, { useContext } from "react";
import { Dialog, withStyles, Box, Typography, makeStyles, List, ListItem } from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import { clientId } from "../../constants/data";

//components
import { AccountContext } from "../../context/AccountProvider";

const style = {
  dialogPaper: {
    height: "95%",
    width: "60%",
    marginTop: "12%",
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
    padding: "56px 0 56px 56px",
  },
  qrcode: {
    height: 264,
    width: 264,
    padding: "56px 0 0 56px",
  },
  title: {
    fontSize: 26,
    marginBottom: 25,
    color: "#525252",
    fontFamily:
      "Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif",
    fontWeight: 300,
  },
  list: {
    "& > *": {
      fontSize: 18,
      padding: 0,
      marginTop: 15,
      lineHeight: "28px",
      color: "#4a4a4a",
    },
  },
});

const Login = ({ classes }) => {
  const classname = useStyles();

  const { setAccount } = useContext(AccountContext);

  const onLoginSuccess = (res) => {
    console.log("login success", res.profileObj);
    setAccount(res.profileObj);
  };

  const onLoginFailure = () => {
    console.log("failure");
  };

  return (
    <Dialog
      classes={{ paper: classes.dialogPaper }}
      open={true}
      BackdropProps={{ style: { backgroundColor: "unset" } }}
    >
      <Box className={classname.component}>
        <Box className={classname.leftComponent}>
          <Typography className={classname.title}>To use WhatsApp on your computer:</Typography>
          <List className={classname.list}>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>2. Tap Menu or Settings and select Linked Device</ListItem>
            <ListItem>3. Point your phone to this screen to capture the code</ListItem>
          </List>
        </Box>
        <Box style={{ position: "relative" }}>
          <img
            src="https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg"
            alt="qr code"
            className={classname.qrcode}
          />
          <Box style={{ position: "absolute", left: "50%", top: "50%" }}>
            <GoogleLogin
              clientId={clientId}
              buttonText=""
              isSignedIn={true}
              onSuccess={onLoginSuccess}
              onFailure={onLoginFailure}
              cookiePolicy={"single_host_origin"}
            />
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default withStyles(style)(Login);
