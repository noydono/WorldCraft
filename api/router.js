const express = require('express'),
    router = express.Router()

const categorieController = require("./controllers/Categorie.js"),
    userController = require("./controllers/userController");

const auth = require("./middleware/auth");

router.route("/register")
    .post(userController.registerNewUser);

router.route("/login")
    .post(userController.loginUser);

router.route("/me")
    .get(auth,userController.getUserDetails);

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

router.route('/getSujet/:id')
    .get(categorieController.getSujetId)

module.exports = router
