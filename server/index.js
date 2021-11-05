import express from "express";
import dotenv from "dotenv";
import cors from "cors";

//components
import Connection from "./database/db.js";

import route from "./routes/Route.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const PORT = 8000;

const username = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;
Connection(username, password);

app.use(cors());
app.use("/", route);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
