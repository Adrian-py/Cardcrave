import mongoose from "mongoose";

let UserSchema = new mongoose.Schema({
  username: String,
  email: String,
});

let UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
