import React, { useEffect, useState, useContext } from "react";
import { getUsers } from "../../services/api";
import { Box, makeStyles } from "@material-ui/core";

//components
import Conversation from "./Conversation";
import { AccountContext } from "../../context/AccountProvider";

const useStyles = makeStyles({
  component: {
    height: "81vh",
    overflow: "overlay",
  },
});

const Conversations = ({ text }) => {
  const [users, setUsers] = useState([]);

  const classes = useStyles();

  const { account, socket, setActiveUsers } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      const filteredData = data.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      setUsers(filteredData);
    };
    fetchData();
  }, [text]);

  useEffect(() => {
    socket.current.emit("addUser", account.googleId);
    socket.current.on("getUsers", (users) => {
      setActiveUsers(users);
    });
  }, [account]);

  return (
    <Box className={classes.component}>
      {users.map(
        (user) =>
          user.googleId !== account.googleId && <Conversation user={user} />
      )}
    </Box>
  );
};

export default Conversations;
