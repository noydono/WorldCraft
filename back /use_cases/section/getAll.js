"use strict";

const SectionService = require("../../services/sectionService");

    
class GetAll {

    constructor() {}

    getAll(res){

        SectionService.getAll()
        .then((result)=>{
            res.status(200).json(result)
        }).catch((error)=>{
            res.status(422).json(error.message)
        })
    }

}
module.exports= new GetAll()