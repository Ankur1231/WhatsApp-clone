import React, { useContext, useEffect, useState } from "react";
import { Box } from "@material-ui/core";

//components
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { UserContext } from "../../context/UserProvider";
import { AccountContext } from "../../context/AccountProvider";
import { getCoversation } from "../../services/api";

const Chat = () => {
  const { person } = useContext(UserContext);
  const { account } = useContext(AccountContext);

  const [conversation, setConversation] = useState({});

  useEffect(() => {
    const getCoversationDetails = async () => {
      const data = await getCoversation({
        sender: account.googleId,
        receiver: person.googleId,
      });
      setConversation(data);
    };
    getCoversationDetails();
  }, [person.googleId]);

  return (
    <Box>
      <ChatHeader />
      <Messages conversation={conversation} person={person} />
    </Box>
  );
};

export default Chat;
