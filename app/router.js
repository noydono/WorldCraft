const express = require('express'),
    router = express.Router();

const userController = require("./controllers/userController"),
    friendController = require("./controllers/friendController")

const registerValidator = require("./middleware/registerValidator"),
    loginValidator = require("./middleware/loginValidator"),
    updateValidator = require("./middleware/updateValidator")

router.route("/register")
    .post(registerValidator, userController.register);

router.route("/login")
    .post(loginValidator, userController.login);

router.route("/update/:id")
    .put(updateValidator,userController.update);

router.route("/delete/:id")
    .delete(userController.delete);

router.route("/friend")
    .get(friendController.getAll)

router.route("/friend/:id")
    .get(friendController.getMyFriend)
    .put(friendController.deleteMyFriend)
    .post(friendController.addFriend);

module.exports = router