/**
 * api/app.js
 * exports an express app.
 */
const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  ROUTER = require("./entrypoint/rest/router.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", ROUTER);

module.exports = app;
