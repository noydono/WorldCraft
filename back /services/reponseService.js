"use strict";

const Reponse = require("../models/reponseModel");

class ReponseService {

  async createReponse(content, sujet_id, author) {

    const reponse = new Reponse({
      content: content,
      sujet_id: sujet_id,
      author: author
    })

    await reponse.save()

    return reponse

  }

  async getAllById(id) {

    return await Reponse.find({
      sujet_id : id
    })

  }

}

module.exports = new ReponseService()