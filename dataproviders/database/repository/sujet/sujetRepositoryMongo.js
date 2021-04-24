const sujetEntitie = require("../../../../core/entities/sujet"),
  sujetInterface = require("../../../../core/port/sujetInterface"),
  SujetModel = require("../../odm/mongoose/schema/sujetModel")

module.exports = class extends sujetInterface {

  constructor() {
    super();
  }

async add(sujet) {

    const mongooseSujet = new SujetModel({
      title: sujet.title,
      content: sujet.content,
      section_id: sujet.section_id,
      author: sujet.author,
      tag: sujet.tag
    })

    await mongooseSujet.save()

    return mongooseSujet
    
}

async getAllById(id) {

  const mongooseSujet = await SujetModel.find({ section_id: id });
  return mongooseSujet.map((item) => {
    return new sujetEntitie(
      item.id,
      item.title,
      item.content,
      item.author,
      item.tag,
      item.section_id,
      item.created_at
    );

  });

}

async getById(id) {

  const mongooseSujet = await SujetModel.findById({ _id: id });
  return new sujetEntitie(
    mongooseSujet._id,
    mongooseSujet.title,
    mongooseSujet.content,
    mongooseSujet.author,
    mongooseSujet.tag,
    mongooseSujet.section_id,
    mongooseSujet.created_at

)
}

};