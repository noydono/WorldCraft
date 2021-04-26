"use strict";

const SectionService = require("../../services/sectionService")

class CreateSection {

    constructor() {}

    createSection(name, description, categorie_id, icon, avatar, res) {

        if (name) {
            SectionService.createSection(name, description, categorie_id, icon, avatar)
                .then((result) => {
                    res.status(201).json(result)
                }).catch((error) => {
                    res.status(422).json(error.message)
                })
        } else {
            res.status(400).json("formulaire non valide")
        }


    }

}
module.exports = new CreateSection()