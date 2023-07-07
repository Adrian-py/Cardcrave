import mongoose, { Schema } from "mongoose";

const { ItemSchema } = require("./Item.model");

const ListSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    items: {
      type: [ItemSchema],
    },
  },
  {
    timestamps: true,
  }
);

const ListModel = mongoose.model("lists", ListSchema);

module.exports = ListModel;
