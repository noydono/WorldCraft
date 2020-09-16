const express = require('express'),
    router = express.Router()

const categorieController = require("./controllers/Categorie.js")

router.route('/createCategorie')
    .post(categorieController.create)

module.exports = router