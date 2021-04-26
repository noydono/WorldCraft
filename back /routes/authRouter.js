const express = require('express'),
    router = express.Router()


const authController = require("../controllers/authController")


router.route("/signup")
    .post( authController.signUp)
    
router.route("/login")
    .post( authController.signIn)


module.exports = router
