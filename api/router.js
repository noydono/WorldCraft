

const express = require('express'),
    router = express.Router()

const homeController = require("./controller/homeController"),
    userController = require("./controller/userController")


router.route("/")
    .get(homeController.getHome)

router.route("/user/register")
    .post(userController.register)

// router.route("/user/update/:id")
//     .put(userController.update)



module.exports = router
