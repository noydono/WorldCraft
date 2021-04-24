"use strict";

const Sujet = require('../../entities/sujet');

module.exports = (title,content,author,tag,section_id, {Repository}) => {

  const sujet = new Sujet(null, title, content, author, tag, section_id);
  return Repository.add(sujet);
  
};