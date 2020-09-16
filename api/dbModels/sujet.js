import mongoose from "mongoose";

const { Schema } = mongoose;

const sujetSchema = new Schema({
  title: String,
  content: String,
  author: String,
  date: String,
  tag: Array,
  categorieID:String,
  like: [
    {
      userId: String,
    },
  ],
  reponse: [
    {
      userId: String,
      content: String,
      like: [
        {
          userId: String,
        },
      ],
    },
  ],
});
const SUJET = mongoose.model("Sujet", sujetSchema);

module.exports = SUJET;
