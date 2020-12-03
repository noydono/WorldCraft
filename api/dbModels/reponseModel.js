const mongoose = require("mongoose");

const { Schema } = mongoose;

const sujetReponseSchema = new Schema({
  content: String,
  sujet_id: String,
  author: String,
  updated_At: Date
},{ timestamps: { createdAt: 'created_at' }});
const SUJETREPONSE = mongoose.model("reponse", sujetReponseSchema);

module.exports = SUJETREPONSE;
