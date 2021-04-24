const Create = require("../../../core/use_cases/reponse/create")
const getAllById = require("../../../core/use_cases/reponse/getAllById")

module.exports = {

  create: async (req, res) => {

    console.log("**********ReponseCreateController****************");

    try {

      const {
        content,
        sujet_id,
        author,
        serviceLocator
      } = req.body
      
      const reponse = await Create(
        content,
        sujet_id,
        author,
        serviceLocator
      )

      res.status(200).json(reponse);

    } catch (exception) {

      res.status(422).json(exception)

    }

  },

  getAllById: async (req, res) => {

    console.log("**********ReponseGetAllByIdController****************");

    try {

      const reponse = await getAllById(req.params.id, req.body.serviceLocator)
      res.status(200).json(reponse)

    } catch (exception) {

      res.status(422).json(exception)

    }
  },



};