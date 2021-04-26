const mongoose = require("mongoose");

const { Schema } = mongoose;

const ReponseSchema = new Schema({
  content: {

    type: String,
    required: true
},
  sujet_id: {

    type: String,
    required: true
},
  author: {

    type: String,
    required: true
},
  updated_At: Date
},{ timestamps: { createdAt: 'created_at' }});
const REPONSE = mongoose.model("reponse", ReponseSchema );

module.exports = REPONSE;
