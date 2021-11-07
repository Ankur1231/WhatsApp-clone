import mongoose from "mongoose";

const ConversationSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const conversation = mongoose.model("conversation", ConversationSchema);

export default conversation;
