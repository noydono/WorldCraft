const express = require('express'),
    router = express.Router()

const serviceLocator = require("../dataproviders/config/service-locator")

const sujetController = require("../entrypoints/rest/controllers/sujetController")


router.route("/create")
    .post(serviceLocator, sujetController.create)

router.route("/getAllById/:id")
    .get(serviceLocator, sujetController.getAllById) 

router.route("/getById/:id")
    .get(serviceLocator, sujetController.getById)


module.exports = router