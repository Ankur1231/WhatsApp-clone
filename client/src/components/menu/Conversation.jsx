import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

//components
import { AccountContext } from "../../context/AccountProvider";
import { getCoversation, setConversation } from "../../services/api";
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
  timeStamp: {
    fontSize: 12,
    marginLeft: "auto",
    marginRight: 20,
    color: "#00000099",
  },
  text: {
    color: "#00000099",
    fontSize: 14,
  },
});

const Conversation = ({ user }) => {
  const [message, setMessage] = useState({});
  console.log(user);

  const classes = useStyles();
  const { account, newMessageFlag } = useContext(AccountContext);
  const { setPerson, person } = useContext(UserContext);

  useEffect(() => {
    const getConversationMessage = async () => {
      const data = await getCoversation({
        sender: account.googleId,
        receiver: user.googleId,
      });
      setMessage({ text: data.message, timeStamp: data.updatedAt });
    };
    getConversationMessage();
  }, [newMessageFlag]);

  const setUser = () => {
    setPerson(user);
    setConversation({ senderId: account.googleId, receiverId: user.googleId });
  };

  return (
    <Box className={classes.component} onClick={() => setUser()}>
      <Box>
        <img src={user.imageUrl} alt="dp" className={classes.displayPicture} />
      </Box>
      <Box style={{ width: "100%" }}>
        <Box style={{ display: "flex" }}>
          <Typography>{user.name}</Typography>
          {message.text && (
            <Typography className={classes.timeStamp}>
              {new Date(message.timeStamp).getHours()}:
              {new Date(message.timeStamp).getMinutes()}
            </Typography>
          )}
        </Box>
        <Box className={classes.text}>{message.text}</Box>
      </Box>
    </Box>
  );
};

export default Conversation;
