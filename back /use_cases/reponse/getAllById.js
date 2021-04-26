"use strict";

const ReponseService = require("../../services/reponseService");


class GetAllById {

    constructor() {}

    async getAllById(id, res) {

        ReponseService.getAllById(id)
            .then((result) => {
                res.status(200).json(result)
            }).catch((error) => {
                res.status(422).json(error.message)
            })
    }

}

module.exports = new GetAllById()