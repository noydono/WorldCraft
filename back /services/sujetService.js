'use strict';

const Sujet = require("../models/sujetModel");

class SujetService {


  async createSujet(
    title,
    content,
    author,
    tag,
    section_id
  ) {

    const sujet = new Sujet({
      title: title,
      content: content,
      section_id: section_id,
      author: author,
      tag: tag
    })

    await sujet.save()

    return sujet

  }

  async getAllById(id) {

    return await Sujet.find({
      section_id: id
    });

  }

  async getOneById(id) {

    return await Sujet.findById({
      _id: id
    });
  }

};

module.exports = new SujetService()