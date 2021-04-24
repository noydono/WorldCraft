const express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    methodOverride = require("method-override"),
    morgan = require('morgan'),
    EventEmitter = require('events'),
    Env = require("./dataproviders/config/setupEnvironment.js"),
    cors = require("cors"),
    corsOption = {
        origin: "http://localhost:8081"
    }

    let dotenv = new Env().init()


    mongoose.connect(process.env.MONGOURL, {

            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true

        }, (err) => {
            if (err) {
                console.log("****** problèmes de connexion à la base de données ******");
                console.log(err);
            } else {
                console.log("****** connecté à la basse de donées ******");
            }
        });
    


const authRouter = require("./routes/authRouter.js")
const categorieRouter = require("./routes/categorieRouter.js")
const sectionRouter = require("./routes/sectionRouter.js")
const sujetRouter = require("./routes/sujetRouter.js")
const reponseRouter = require("./routes/responseRouter.js");
    

const emitter = new EventEmitter()
emitter.setMaxListeners(0)
EventEmitter.prototype._maxListeners = 100;



app.use(cors(corsOption))
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(express.json());


app.use("/auth", authRouter);
app.use("/categorie", categorieRouter);
app.use("/section", sectionRouter);
app.use("/sujet", sujetRouter);
app.use("/reponse", reponseRouter);


app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("NODE_ENV = "+ process.env.NODE_ENV);
        console.log("api tourne sur le port : " + process.env.PORT );
    }
})

module.exports = app;