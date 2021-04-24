const express = require('express'),
    router = express.Router()

const serviceLocator = require("../dataproviders/config/service-locator")

const authController = require("../entrypoints/rest/controllers/authController")


router.route("/signup")
    .post(serviceLocator , authController.signup)
    
router.route("/login")
    .post(serviceLocator, authController.login)


module.exports = router
