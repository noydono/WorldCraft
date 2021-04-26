"use strict";

const User = require("../models/userModel")

class AuthService {

  constructor() {}

  async createUser(pseudo, email, password) {


    let user = new User({
      pseudo: pseudo,
      email: email,
      password: password
    });

    await user.save()
    console.log(user);
    return await User.generateAuthToken(user)

  }

  async findByCredential(email, password) {

    const user = await User.findByCredentials(email, password)
        return await User.generateAuthToken(user[0])


  }


  async getUserByEmail(email) {

    const user = await User.findOne({
      email
    });
    if (user) {
      throw new Error("L'email est déjà utiliser")
    } else {
      return
    }
  }

  async getUserByPseudo(pseudo) {

    const user = await User.findOne({
      pseudo
    });
    if (user) {
      throw new Error("Le pseudo est déjà utiliser")
    } else {
      return
    }


  }
};

module.exports = new AuthService()