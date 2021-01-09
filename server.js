const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    mongoose = require("mongoose"),
    methodOverride = require("method-override"),
    morgan = require('morgan'),
    dotenv = require("dotenv").config(),
    port = process.env.PORT;


const  ROUTER = require('./api/router.js');

mongoose.connect(process.env.MONGO_URI,{

    useNewUrlParser: true ,
    useUnifiedTopology: true,
    useFindAndModify: false

},(err) => {
    if(err){
        console.log("****** api n'est pas connecté à la base de données ******")
    }else{
        console.log("****** connecté à la basse de donées ******")
    }
});

app.use(methodOverride("X-HTTP-Method-Override"));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(morgan("dev"));

app.use(cors());

app.use("/", ROUTER);

app.listen(port,(err) => {

    if(err){

        console.log("Erreur de connexion au port " + port + " :" + err );

    }else{

        console.log("connecter au port : " + port);

    }

})
module.exports = app;