const mongoose = require("mongoose");

const { Schema } = mongoose;

const categorieSmallSchema = new Schema({
 name:String,
 description:String,
 categorieBig_id:String,
 created_At:String,
 updated_At:String,
});
const categoriesmall = mongoose.model("SujetSmall", categorieSmallSchema);

module.exports = categoriesmall;
