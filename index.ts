import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT_NUMBER || 3000;

const app = express();
app.use(cors());

app.get("/api", (req, res) => {
  res.send({ res: "yes" });
});

app.listen(PORT, () => {
  console.log(`Listening to PORT: ${PORT}`);
});
