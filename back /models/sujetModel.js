const mongoose = require("mongoose");

const { Schema } = mongoose;

const sujetSchema = new Schema({
  title: {
    type: String,
    required : true
  },
  content: {
    type: String,
    required : true
  },
  author: {
    type: String,
    required : true
  },
  tag: Array,
  section_id:{
    type: String,
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
