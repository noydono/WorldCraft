import mongoose from "mongoose";

const { Schema } = mongoose;

const sujetSchema = new Schema({
  title: String,
  content: String,
  author: String,
  date: String,
  tag: Array,
  categorieSmall_id:String,
  like: [
    {
      userId: String,
    },
  ],
  created_At:Date,
  updated_At:Date
});
const SUJET = mongoose.model("Sujet", sujetSchema);

module.exports = SUJET;
