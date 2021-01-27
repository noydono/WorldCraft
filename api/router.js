

const express = require('express'),
    router = express.Router();

const homeController = require("./controller/homeController"),
    userController = require("./controller/userController");

const Validator = require("./middleware/Validator");


router.route("/")
    .get(homeController.getHome);

router.route("/user/register")
    .post(Validator,userController.register);

router.route("/user/login")
    .post(Validator,userController.login);

// router.route("/user/update/:id")
//     .put(userController.update)



module.exports = router
