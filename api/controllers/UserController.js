const User = require("../dbModels/userModel.js"),
  nodemailer = require('nodemailer'),
  jwt = require("jsonwebtoken"),

  transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: 'gmail',
    port: '587',
    secure: true,
    auth: {
      user: "noydono.dev@gmail.com",
      pass: process.env.MPDEMAIL
    },
    tls: {
      rejectUnauthorized: false
    }
  })

module.exports = {

  registerNewUser: async (req, res) => {

    try {

      const uniqueMail = await User.findOne({ email: req.body.email }),
        uniquePseudo = await User.findOne({ pseudo: req.body.pseudo });

      if (!uniqueMail && !uniquePseudo) {

        const user = new User({
          pseudo: req.body.pseudo,
          email: req.body.email,
          password: req.body.password
        });

        let data = await user.save();

        const EmailToken = jwt.sign({ _id: data._id, email: req.body.email },
          "EmailSecret");

        console.log(EmailToken);

        link = "http://localhost:4000" + "/verify/" + EmailToken
        mailOptions = {
          from: 'noydono.dev@gmail.com',
          to: req.body.email,
          subject: "WorldCraft Email de Verification",
          html: "Hello,<br> Please Click on the link to verify your email.<br><a href=" + link + ">Click here to verify</a>"
        }
        console.log("2");

        console.log(mailOptions)

        transporter.sendMail(mailOptions, (err, res, next) => {

          if (err) {
            console.log(err)
            res.redirect('back')
          } else {
            console.log("Message Envoyer")
            next()

          }
        })
        console.log("3");

        const token = await user.generateAuthToken();
        res.status(201).json({ data, token });

      } else {
        res.json({ err: " email pseudo non unique " })
      }

    } catch (err) {
      res.status(400).json({ err: err });
    }

  },

  loginUser: async (req, res) => {
    try {

      const email = req.body.email;
      const password = req.body.password;
      const user = await User.findByCredentials(email, password);

      if (!user) {

        return res.status(401).json({ error: "Échec de la connexion! Vérifier les informations d'authentification" });
      }

      const token = await user.generateAuthToken();
      res.status(201).json({ user, token });

    } catch (err) {

      res.status(400).json({ err: err });

    }

  },

  getUserDetails: async (req, res) => {

    await res.json(req.userData);

  },

}