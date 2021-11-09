import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  component: {
    background: "#f8f9f8",
    height: "100%",
    padding: "50px 0",
    textAlign: "center",
  },
  image: {
    width: 420,
  },
});

const EmptyChat = () => {
  const classes = useStyles();
  const url =
    "https://ik.imagekit.io/ag/wp-content/uploads/2015/01/QR-connected.png";
  return (
    <Box className={classes.component}>
      <img src={url} alt="pic" className={classes.image} />
    </Box>
  );
};

export default EmptyChat;
