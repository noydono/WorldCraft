const Validator = require("../middleware/Validator"),
  UserModel = require("../model/UserModel"),
  nodemailer = require("nodemailer"),
  jwt = require("jsonwebtoken"),
  transporter = nodemailer.createTransport({
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

module.exports = {
  register: async (req, res) => {
    const errors = [];
    const data = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };
    const user = new UserModel(data);
    user.save((err, user_saved) => {

      const EmailToken = jwt.sign(
        { _id: data._id, email: req.body.email },
        process.env.EMAILSECRET
      ),
        link = process.env.URL + "/verify/" + EmailToken,
        mailOptions = {
          from: "noydono.dev@gmail.com",
          to: req.body.email,
          subject: "WorldCraft Email de Verification",
          html:
            "Hello,<br> Please Click on the link to verify your email.<br><a href=" +
            link +
            ">Click here to verify</a>",
        };

      transporter.sendMail(mailOptions, (err, res, next) => {
        /* istanbul ignore if */
        if (err) {
          errors.push({
            emailVerification: "err email not send",
          });
          next();
        } else {
          console.log("email send!");
          next();
        }
      });
      res.status(201).json({
        message: "User created!",
        user: user_saved,
        emailVerification: "email sent successfully!",
        errors: errors,
      });
    });
    await user.generateAuthToken();
  },

  login: async (req, res) => {
    const errors = [];
    const user = await UserModel.findByCredentials(req.body.email, req.body.password);
    if (user.hasErrors) {
      res.status(422).json({
        message: "Invalid entry",
        errors: user.errors,
      });
    } else {
      const token = await user.generateAuthToken();
      res.status(200).json({
        message: "Auth OK",
        token: token,
        errors: errors,
      });
    }
  }
      // update: (req, res) => {
    //   let errors = [];
    //   let { username, email, password } = req.body;
    //   UserModel.findByIdAndUpdate(
    //     req.params.id,
    //     { username, email, password },
    //     { new: true },
    //     (err, user) => {
    //     /* istanbul ignore if */
    //       if (err) { 
    //         console.log(err);
    //       } else {
    //         res.status(200).json({
    //           message: "update successful!",
    //           user: user,
    //           errors: errors,
    //         });
    //       }
    //     }
    //   );
    // },
  
};