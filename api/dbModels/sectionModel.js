const mongoose = require("mongoose");

const { Schema } = mongoose;

const sectionSchema = new Schema({
 name:String,
 description:String,
 categorie_id:String,
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

const section = mongoose.model("Section", sectionSchema);

module.exports = section;
