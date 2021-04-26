"use strict";

const CategorieService = require("../../services/categorieService")

    
class GetAll {

    constructor() {}

    async getAll(res){

        CategorieService.getAll()
        .then((result)=>{
            res.status(200).json(result)
        }).catch((error)=>{
            res.status(422).json(error.message)
        })
    }

}
module.exports= new GetAll()