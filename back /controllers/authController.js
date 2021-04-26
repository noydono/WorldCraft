"use strict";

const
  SignUp = require("../use_cases/auth/singUp"),
  SignIn = require("../use_cases/auth/signIn")


module.exports = {

  signUp(req, res) {

    const { pseudo, email, password } = req.body;
    SignUp.signUp(pseudo, email, password, res);

  },

  signIn(req, res) {

    const { email, password } = req.body;
    SignIn.singIn(email, password, res);
     
  }
};