"use strict";

const GetAll = require("../use_cases/categorie/getAll");
const Create = require("../use_cases/categorie/create")

module.exports = {

  create(req, res) {

      const { name } = req.body
      Create.createCategorie(name, res)
      
  },

  getAll(req, res) {

      GetAll.getAll(res)

  }

};