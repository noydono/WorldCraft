const express = require('express'),
    router = express.Router()

const serviceLocator = require("../dataproviders/config/service-locator")

const categorieController = require("../entrypoints/rest/controllers/categorieController")


router.route("/create")
    .post(serviceLocator , categorieController.create)
    
router.route("/get")
    .get(serviceLocator, categorieController.get)


module.exports = router
