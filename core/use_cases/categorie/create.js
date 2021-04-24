"use strict";

const Categorie = require('../../entities/categorie');

module.exports = (name, { Repository }) => {

  const categorie = new Categorie(null, name);
  return Repository.create(categorie);
  
};