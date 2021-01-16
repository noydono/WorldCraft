/**
 * api/app.js
 * exports an express app.
 */
const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  dotenv = require("dotenv").config(),
  mongoose = require("mongoose"),
  methodOverride = require("method-override"),
  ROUTER = require("./api/router.js");

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) {
      console.log("****** api n'est pas connecté à la base de données ******");
    } else {
      console.log("****** connecté à la basse de donées ******");
    }
  }
);
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", ROUTER);

module.exports = app;
