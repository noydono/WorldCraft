const reponseEntitie = require("../../../../core/entities/reponse"),
  reponseInterface = require("../../../../core/port/reponseInterface"),
  ReponseModel = require("../../odm/mongoose/schema/reponseModel")

module.exports = class extends reponseInterface {
  
  constructor() {
    super();
  }

  async create(reponse) {
    const mongooseReponse = new ReponseModel({
      content: reponse.content,
      sujet_id: reponse.sujet_id,
      author: reponse.author
    })
    
    await mongooseReponse.save()

    return mongooseReponse

  }

  async getAllById(id) {
    
    const mongooseReponse = await ReponseModel.find({
      sujet_id: id
    });

    return mongooseReponse.map((item) => {
      return new reponseEntitie(
        item.id,
        item.content,
        item.sujet_id,
        item.author,
      );

    });

  }

};