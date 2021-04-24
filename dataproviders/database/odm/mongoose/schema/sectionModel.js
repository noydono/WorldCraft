const mongoose = require("mongoose");

const { Schema } = mongoose;

const sectionSchema = new Schema({
 name:{

    type: String,
    required: true
},
 description:{

    type: String,
    required: true
},
 categorie_id:{

    type: String,
    required: true
},
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

const SECTION = mongoose.model("Section", sectionSchema);

module.exports = SECTION;
