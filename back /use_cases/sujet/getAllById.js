"use strict";

const SujetService = require("../../services/sujetService");

class GetAllById {

    constructor() {}

    async getAllById(
        section_id,
        res) {

        SujetService.getAllById(section_id)
            .then((result) => {
                res.status(200).json(result)
            })
            .catch((error) => {
                res.status(422).json(error.message)
            })

    }

}
module.exports = new GetAllById()