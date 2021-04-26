const express = require('express'),
    router = express.Router()


const reponseController = require("../controllers/reponseController")


router.route("/create/:id")
    .post(reponseController.createReponse)
    
router.route("/getAllById/:id")
    .get(reponseController.getAllById)


module.exports = router
