const mongoose = require("mongoose");

const { Schema } = mongoose;

const categorieSchema = new Schema({
 name:String,
 description:String,
 categorie:String,//array contenent au que mod il apartai java worldedit ...
 tag:String,
});
const SUJET = mongoose.model("Sujet", categorieSchema);

module.exports = SUJET;
