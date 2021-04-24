"use strict";

const Section = require('../../entities/section');

module.exports = (name, description, categorie_id, icon, avatar, { Repository }) => {

  const section = new Section(null, name, description, categorie_id, icon, avatar);
  return Repository.create(section);
  
};