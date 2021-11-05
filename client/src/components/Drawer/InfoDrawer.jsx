import React from "react";
import { Drawer, Box, Typography, makeStyles } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";

//component
import Profile from "./Profile";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#00bfa5",
    height: 97,
    color: "#fff",
    display: "flex",
    "& > *": {
      marginTop: "auto",
      padding: 15,
      fontWeight: 600,
    },
  },
  component: {
    backgroundColor: "#ededed",
    height: "85%",
  },
});

const InfoDrawer = ({ open, setOpen }) => {
  const classes = useStyles();

  const handelClose = () => {
    setOpen(false);
  };

  return (
    <Drawer open={open} onClose={handelClose}>
      <Box className={classes.header}>
        <ArrowBack onClick={handelClose} />
        <Typography>Profile</Typography>
      </Box>
      <Box className={classes.component}>
        <Profile />
      </Box>
    </Drawer>
  );
};

export default InfoDrawer;
