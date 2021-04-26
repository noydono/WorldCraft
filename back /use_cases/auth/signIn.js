'use strict';

const AuthService = require("../../services/authService");

class SingIn {

    constructor() {}

    async singIn(email, password, res) {

        if (email) {

            AuthService.findByCredential(email, password)
            .then((result)=>{
                res.status(200).json(result)
            }).catch((error)=>{ 
                res.status(422).json(error.message || error)
            })
            
        } else {

            res.status(400).json("Il manque des informations")

        }

    }

}

module.exports = new SingIn()