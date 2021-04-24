const Create = require("../../../core/use_cases/sujet/create")
const getAllById = require("../../../core/use_cases/sujet/getAllById")
const getById = require("../../../core/use_cases/sujet/getById")

module.exports = {

    create: async (req, res) => {

        console.log("**********SujetCreateController****************");

        try {

            const {
                title,
                content,
                author,
                tag,
                section_id,
                serviceLocator
            } = req.body

            const sujet = await Create(
                title,
                content,
                author,
                tag,
                section_id,
                serviceLocator
            )

            res.status(200).json(sujet);

        } catch (exception) {

            res.status(422).json(exception)

        }

    },

    getAllById: async (req, res) => {

        console.log("**********SujetGetAllByIdController****************");

        try {

            const sujet = await getAllById(req.params.id, req.body.serviceLocator)
            res.status(200).json(sujet)

        } catch (exception) {

            res.status(422).json(exception)

        }
    },

    getById: async(req, res) => {
        console.log("**********SujetByIdController****************");
        try {

            const sujet = await getById(req.params.id, req.body.serviceLocator)
            res.status(200).json(sujet)

        } catch (exception) {

            res.status(422).json(exception)

        }
    }

};