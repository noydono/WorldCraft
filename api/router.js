const express = require('express'),
    router = express.Router()

const categorieController = require("./controllers/Categorie.js")

router.route('/setBigCategorie')
    .post(categorieController.setBigCategorie)

router.route('/getBigCategorie')
    .get(categorieController.getBigCategorie)

router.route('/setSmallCategorie')
    .post(categorieController.setSmallCategorie)

router.route('/getSmallCategorie')
    .get(categorieController.getSmallCategorie)

router.route('/setSujet')
    .post(categorieController.setSujet)

router.route('/getSmallCategorie/:id')
    .get(categorieController.getSujet)

module.exports = router
