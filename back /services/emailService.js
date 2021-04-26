"use strict";

const nodemailer = require("nodemailer"),
  Env = require("../config/setupEnvironment");

let dotenv = new Env().init()

module.exports = class EmailService {

  constructor(host, email, pseudo) {
   
    this.host = host;
    this.email = email;
    this.pseudo = pseudo;
    this.mailOptions;
    this.transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      service: "gmail",
      port: "587",
      secure: true,
      auth: {
        user: "noydono.dev@gmail.com",
        pass: process.env.MPDEMAIL,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    this.setupEmail();
  
  }

  setupEmail() {

      const rand = Math.floor(Math.random() * 100 + 54),
        link = "http://" + this.host + "/verify/" + rand,
        mailOptions = {
          from: "noydono.dev@gmail.com",
          to: this.email,
          subject: "LazyMenu Email de Verification",
          rand: rand,
          html: "bonjour " +
            this.pseudo +
            ",<br> Cliquer sur le lien pour verifier votre comptre<br><a href=" +
            link +
            ">Cliquer pour vérifier</a>",
        };
      this.mailOptions = mailOptions;

    


  }

  sendEmail() {

    this.transporter.sendMail(this.mailOptions, (err, next) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Message Envoyer");
        next();
      }
    });

  }
};