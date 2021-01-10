

const express = require('express'),
    router = express.Router()
/**
 * CONTROLLER
 */
const homeController = require("./controller/homeController"),
    userController = require("./controller/user/userController")
/**
 * MIDDELWARE
 */


router.route("/")
    .get(homeController.getHome)
/**
 * User ROUTE
 */
router.route("/register")
    .post(userController.register)
/**
 * User ROUTE
 */


module.exports = router
