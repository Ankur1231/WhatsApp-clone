import React, { useContext, useState } from "react";
import { Box, makeStyles } from "@material-ui/core";
import { Chat } from "@material-ui/icons";

//components
import { AccountContext } from "../../context/AccountProvider";
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../Drawer/InfoDrawer";

const useStyles = makeStyles({
  header: {
    height: 35,
    backgroundColor: "#edededed",
    padding: "10px 16px",
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    height: 37,
    width: 37,
    borderRadius: "50%",
  },
  icons: {
    marginLeft: "auto",
    "& > *": {
      marginLeft: 2,
      padding: 8,
      color: "#919191",
    },
    "& :first-child": {
      fontSize: 22,
      marginRight: 8,
    },
  },
});

const Header = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();
  const { account } = useContext(AccountContext);

  const toggleDrawer = () => {
    setOpen(true);
  };

  return (
    <>
      <Box className={classes.header}>
        <img
          src={account.imageUrl}
          alt="dp"
          className={classes.avatar}
          onClick={() => {
            toggleDrawer();
          }}
        />
        <Box className={classes.icons}>
          <Chat />
          <HeaderMenu />
        </Box>
      </Box>
      <InfoDrawer open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
