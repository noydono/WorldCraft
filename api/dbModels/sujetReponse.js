const mongoose = require("mongoose");

const { Schema } = mongoose;

const sujetReponseSchema = new Schema({
 description:String,
 sujet_id:String,
 like: [
    {
      userId: String,
    },
  ],
  created_At:Date,
  updated_At:Date
});
const SUJETREPONSE = mongoose.model("SujetReponse", sujetReponseSchema);

module.exports = SUJETREPONSE;
