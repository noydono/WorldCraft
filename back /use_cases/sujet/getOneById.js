"use strict";

const SujetService = require("../../services/sujetService");


class GetOneById {

    constructor() {}

    async getOneById(id,res){

        SujetService.getOneById(id)
            .then((result) => {
                res.status(200).json(result)
            })
            .catch((error) => {
                res.status(422).json(error.message)
            })
    }

}

module.exports = new GetOneById()