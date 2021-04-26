const CreateSujet = require("../use_cases/sujet/create")
const GetAllById = require("../use_cases/sujet/getAllById")
const GetOneById = require("../use_cases/sujet/getOneById")

module.exports = {

    create: (req, res) => {
        console.log(req.body);

        const {
            title,
            content,
            author,
            tag,
            section_id
        } = req.body

        CreateSujet.createSujet(
            title,
            content,
            author,
            tag,
            section_id,
            res
        )



    },

    getAllById: (req, res) => {

        GetAllById.getAllById(req.params.id, res)

    },

    getOneById: (req, res) => {

        GetOneById.getOneById(req.params.id, res)

    }

};