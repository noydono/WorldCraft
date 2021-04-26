const express = require('express'),
    router = express.Router()


const categorieController = require("../controllers/categorieController")


router.route("/create")
    .post( categorieController.create)
    
router.route("/get")
    .get( categorieController.getAll)


module.exports = router
