import { Server } from "socket.io";

const PORT = 9000;

const io = new Server(PORT, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let users = [];

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

io.on("connection", (socket) => {
  console.log("User connected");

  //connect
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  //send message
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    console.log(text);
    // sending the text to the socket id of the reciever
    io.to(user.socketId).emit("getMessage", {
      senderId,
      text,
    });
  });

  //disconnect
  socket.on("disconnect", () => {
    console.log("user disconnected");
    removeUser(socket.id);
    console.log(users);
    io.emit("getUsers", users);
  });
});
