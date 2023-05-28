import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import { ConnectDatabase } from "./database/connect";

const HomeRouter = require("./routes/App.routes");
const UserModel = require("./models/User.model");

dotenv.config();
const PORT = process.env.PORT_NUMBER || 3000;

const app = express();
app.use(cors());

ConnectDatabase();
const newUser = new UserModel({
  username: "adrian",
  email: "adrianhar@gmail.com",
});

newUser.save();

app.use("/", HomeRouter);

app.listen(PORT, () => {
  console.log(`Listening to PORT: ${PORT}`);
});
