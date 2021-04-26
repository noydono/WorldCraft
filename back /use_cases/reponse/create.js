"use strict";

const ReponseService = require("../../services/reponseService");

class CreateReponse {

    constructor() {}

    createReponse(
        content,
        sujet_id,
        author,
        res
    ) {
        if (content,sujet_id,author){

            ReponseService.createReponse(content, sujet_id, author)
                .then((result) => {
                    res.status(200).json(result)
                })
                .catch((error) => {
                    res.status(422).json(error.message)
                })

        } else {
            res.status(400).json("Formulaire invalid")
        }


    }

}
module.exports = new CreateReponse()