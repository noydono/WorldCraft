"use strict";

const CategorieService = require("../../services/categorieService")

class CreateCategorie {

    constructor() {}

    async createCategorie(name,res){

        if(name){
            CategorieService.createCategorie(name)
            .then((result)=>{
                res.status(201).json(result)
            }).catch((error)=>{
                res.status(422).json(error.message)
            })
        }else{
            res.status(400).json("formulaire non valide")
        }
        
        
    }

} module.exports= new CreateCategorie()