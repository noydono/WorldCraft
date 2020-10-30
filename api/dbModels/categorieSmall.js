const mongoose = require("mongoose");

const { Schema } = mongoose;

const categorieSmallSchema = new Schema({
 name:String,
 description:String,
 categorieBig_id:String,
 icon:{
    type: String,
    default:"far fa-comment-alt"
},
 avatar:{
    type: String,
    default:"https://cdn.vuetifyjs.com/images/lists/1.jpg"
},
 updated_At:String,
},{ timestamps: { createdAt: 'created_at' } });
const categoriesmall = mongoose.model("SujetSmall", categorieSmallSchema);

module.exports = categoriesmall;
