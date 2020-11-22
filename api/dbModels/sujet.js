const mongoose = require("mongoose");

const { Schema } = mongoose;

const sujetSchema = new Schema({
  title: String,
  content: String,
  author: String,
  date: String,
  tag: Array,
  categorieSmall_id:{
    type: String,
    default: "5f9c5fdf7f2da87258fa88e5"
  },
  like: [
    {
      userId: String,
    },
  ],
  updated_At:String
},{ timestamps: { createdAt: 'created_at' }});
const SUJET = mongoose.model("Sujet", sujetSchema);

module.exports = SUJET;
