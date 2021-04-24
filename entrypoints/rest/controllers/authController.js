const
  SignUp = require("../../../core/use_cases/auth/signup"),
  SignIn = require("../../../core/use_cases/auth/singin"),
  Mailer = require("../../jobs/nodemailer")


module.exports = {

  async signup(req, res) {

    console.log("**********AuthSignUpController****************");
    
    try {

      const {
        pseudo,
        email,
        password,
        serviceLocator
      } = req.body

      const user = await SignUp(pseudo, email, password, serviceLocator)

      nodeMailer = new Mailer(req.get("host"), user.email, user.pseudo)
      nodeMailer.sendEmail()

      res.status(200).json(user);

    } catch (exception) {

      res.status(422).json(exception)

    }


  },

  async login(req, res) {

    console.log("**********AuthLoginController****************");

    try {

      const {
        email,
        password,
        serviceLocator
      } = req.body

      const user = await SignIn(email, password, serviceLocator)
      res.status(200).json(user)

    } catch (exception) {

      res.status(422).json(exception)

    }


  }
};