const express = require('express'),
    router = express.Router()


const sectionController = require("../controllers/sectionController")


router.route("/create")
    .post(sectionController.create)
    
router.route("/get")
    .get(sectionController.get)


module.exports = router
