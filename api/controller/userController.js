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
    let { username, email, password } = req.body;
    let errors = new Validator(username, email, password),
    hasErrors = errors.hasErrors;

    if (errors.hasErrors) {
      res.status(422).json({
        message: "Invalid entry",
        errors: errors.errors,
      });
    } else {
      const data = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      };
      const user = new UserModel(data);
      user.save((err, user_saved) => {
        /* istanbul ignore if */
        if (err) {
          console.log(err);
        } else {
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
              hasErrors = true;
              next();
            } else {
              console.log("email send!");
              next();
            }
          });
          /* istanbul ignore if */
          if (hasErrors) {
            res.status(422).json({
              message: "user register but Err",
              errors: errors.errors,
            });
          } else {
            res.status(201).json({
              message: "User created!",
              user: user_saved,
              emailVerification: "email sent successfully!",
              errors: errors.errors,
            });
          }
        }
      });
      await user.generateAuthToken();
    }
  },
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
