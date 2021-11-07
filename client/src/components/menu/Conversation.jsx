import React, { useContext } from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

//components
import { AccountContext } from "../../context/AccountProvider";
import { setConversation } from "../../services/api";
import { UserContext } from "../../context/UserProvider";

const useStyles = makeStyles({
  component: {
    display: "flex",
    height: 40,
    padding: "13px 0",
    cursor: "pointer",
  },
  displayPicture: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    padding: "0 14px",
  },
});

const Conversation = ({ user }) => {
  const classes = useStyles();
  const { account } = useContext(AccountContext);
  const { setPerson } = useContext(UserContext);

  const setUser = () => {
    setPerson(user);
    setConversation({ senderId: account.googleId, receiverId: user.googleId });
  };

  return (
    <Box className={classes.component} onClick={() => setUser()}>
      <Box>
        <img src={user.imageUrl} alt="dp" className={classes.displayPicture} />
      </Box>
      <Box>
        <Box>
          <Typography>{user.name}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Conversation;
