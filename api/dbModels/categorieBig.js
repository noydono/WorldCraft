const mongoose = require("mongoose");

const { Schema } = mongoose;

const categorieBigSchema = new Schema({
 name:String,
});
const categorebig = mongoose.model("CategorieBig", categorieBigSchema);

module.exports = categorebig;
