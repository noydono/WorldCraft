"use strict";


module.exports = class Env{
    constructor(){

    }

    init(){
        let dotenv;
        if (process.env.NODE_ENV === 'production') {

            return dotenv = require("dotenv").config({
                path: '.env'
            })
        
        } else if (process.env.NODE_ENV === 'developpement') {
        
            
            return dotenv = require("dotenv").config({
                path: '.env.dev'
            })

        } else if (process.env.NODE_ENV === 'test') {
        
            return dotenv = require("dotenv").config({
                path: '.env.test'
            })

        }
        
    }
}