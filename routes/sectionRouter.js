const express = require('express'),
    router = express.Router()

const serviceLocator = require("../dataproviders/config/service-locator")

const sectionController = require("../entrypoints/rest/controllers/sectionController")


router.route("/create")
    .post(serviceLocator , sectionController.create)
    
router.route("/get")
    .get(serviceLocator, sectionController.get)


module.exports = router
