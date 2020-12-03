const express = require('express'),
    router = express.Router()

const categorieController = require("./controllers/CategorieController.js"),
    sectionController = require("./controllers/SectionController.js"),
    sujetController = require("./controllers/SujetController.js"),
    reponseController = require("./controllers/ReponseController.js"),
    userController = require("./controllers/UserController.js");

const auth = require("./middleware/auth");



/*
 *
 *  Gestion de Categorie
 * 
 * * */

router.route('/setCategorie')
    .post(categorieController.setCategorie)

router.route('/getCategorie')
    .get(categorieController.getCategorie)

/*
 *
 *  Gestion de Section
 * 
 * * */

router.route('/setSection')
    .post(sectionController.setSection)

router.route('/getSection')
    .get(sectionController.getSection)



/*
 *
 *  Gestion de Sujet
 * 
 * * */

router.route("/setSujet")
    .post(sujetController.setSujet)

router.route("/getSujet/:id")
    .get(sujetController.getSujet)

router.route("/getSujetId/:id")
    .get(sujetController.getSujetId)


/*
 *
 *  Gestion de Reponse
 * 
 * * */

router.route("/setReponse")
    .post(reponseController.setReponse)

router.route("/getReponse/:id")
    .get(reponseController.getReponse)

/*
 *
 *  Gestion d'User
 * 
 * * */

router.route("/register")
    .post(userController.registerNewUser);

router.route("/login")
    .post(userController.loginUser);

router.route("/me")
    .get(auth,userController.getUserDetails);


module.exports = router
