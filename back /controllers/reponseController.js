const CreateReponse = require("../use_cases/reponse/create")
const GetAllById = require("../use_cases/reponse/getAllById")

module.exports = {

  createReponse: (req, res) => {

    const {
      content,
      sujet_id,
      author
    } = req.body;

    CreateReponse.createReponse(
      content,
      sujet_id,
      author,
      res
    )

  },

  getAllById: (req, res) => {

    GetAllById.getAllById(req.params.id, res)

  },



};