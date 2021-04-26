"use strict";

const SujetService = require("../../services/sujetService")

class CreateSujet {

    constructor() {}

    createSujet(
        title,
        content,
        author,
        tag,
        section_id,
        res
    ) {

        if (title,content,author,tag,section_id) {
            SujetService.createSujet(title,content,author,tag,section_id)
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

module.exports = new CreateSujet()