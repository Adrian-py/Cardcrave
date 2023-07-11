import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import { ConnectDatabase } from "./database/connect";

// Routes
const HomeRouter = require("./routes/App.routes");
const AuthRouter = require("./routes/Auth.routes");

dotenv.config();
const PORT = process.env.PORT_NUMBER || 3000;

// Middleware
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to Database
ConnectDatabase();

app.use("/", HomeRouter);
app.use("/auth/", AuthRouter);

app.listen(PORT, () => {
  console.log(`Listening to PORT: ${PORT}`);
});
