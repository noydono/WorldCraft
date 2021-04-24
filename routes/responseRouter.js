const express = require('express'),
    router = express.Router()

const serviceLocator = require("../dataproviders/config/service-locator")

const reponseController = require("../entrypoints/rest/controllers/reponseController")


router.route("/create/:id")
    .post(serviceLocator , reponseController.create)
    
router.route("/getAllById/:id")
    .get(serviceLocator, reponseController.getAllById)


module.exports = router
