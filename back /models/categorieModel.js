const mongoose = require("mongoose");

const {
    Schema
} = mongoose;

const categorieSchema = new Schema({

    name: {

        type: String,
        required: true
    },

});
const CATEGORIE = mongoose.model("Categorie", categorieSchema);

module.exports = CATEGORIE;