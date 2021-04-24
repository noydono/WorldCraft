"use strict";

const Reponse = require('../../entities/reponse');

module.exports = (content,sujet_id,author, {Repository}) => {

  const reponse = new Reponse(null, content, sujet_id, author);
  return Repository.create(reponse);
  
};