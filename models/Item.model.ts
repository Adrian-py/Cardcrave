import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  name: String,
});

const ItemModel = mongoose.model("items", ItemSchema);

module.exports = { ItemModel, ItemSchema };
