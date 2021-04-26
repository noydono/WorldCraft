const express = require('express'),
    router = express.Router()


const sujetController = require("../controllers/sujetController")


router.route("/create")
    .post(sujetController.create)

router.route("/getAllById/:id")
    .get(sujetController.getAllById) 

router.route("/getById/:id")
    .get(sujetController.getOneById)


module.exports = router