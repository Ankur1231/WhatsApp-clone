import Conversation from "../model/Conversation.js";

export const newConversation = async (req, res) => {
  const { senderId, receiverId } = req.body;

  try {
    const exist = await Conversation.findOne({ members: { $all: [senderId, receiverId] } });
    if (exist) {
      res.status(200).json("convo already exist");
      return;
    }

    const newConversation = new Conversation({
      members: [senderId, receiverId],
    });

    await newConversation.save();
    res.status(200).json("new convo added successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};
