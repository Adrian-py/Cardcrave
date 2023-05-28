import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const DatabaseLink = process.env.MONGO_DB_URL;

export async function ConnectDatabase() {
  mongoose.connect(`${DatabaseLink}`).then(
    (res) => {
      console.log("Connection Successfully Started!");
    },
    (err) => {
      console.log(err);
    }
  );
}
