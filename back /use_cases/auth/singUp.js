"use strict";

const AuthService = require("../../services/authService");
const EmailService = require("../../services/emailService")

class SignUp {

    constructor() {}

    async signUp(pseudo, email, password, res) {

        if (email && pseudo) {

            try {

                await AuthService.getUserByEmail(email),
                await AuthService.getUserByPseudo(pseudo)

                AuthService.createUser(pseudo, email, password)
                    .then((token) => {

                        const mailer = new EmailService("localhost:8081", email, pseudo)
                        mailer.sendEmail()

                        res.status(201).json(token)

                    })

            } catch (error) {
                res.status(422).json(error.message)
            }


        } else {

            res.status(400).json("Il manque des informations")

        }

    }

}

module.exports = new SignUp()