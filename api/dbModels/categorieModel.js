const mongoose = require("mongoose");

const { Schema } = mongoose;

const categorieSchema = new Schema({

 name:String,
 
});
const categore = mongoose.model("Categorie", categorieSchema);

module.exports = categore;
