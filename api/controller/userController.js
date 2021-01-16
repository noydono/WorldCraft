const Validator = require("../middleware/Validator");
const UserModel = require("../model/UserModel");
module.exports = {
  register: async (req, res) => {
    let { username, email, password } = req.body;
    let errors = new Validator(username, email, password);

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
      await UserModel.create(data, async(err, user_saved) => {
        if (err) {
          console.log(err);
        } else {
          await user_saved.generateAuthToken()
          res.status(201).json({
            message: "User created!",
            user: user_saved,
            errors: errors.errors,
          });
        }
      });
    }
  },
  update: (req, res) => {
    let errors= [];
    let { username, email, password } = req.body;
    UserModel.findByIdAndUpdate(
      req.params.id,
      { username, email, password}, 
      {new: true},
      (err, user) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json({
            message: "update successful!",
            user: user,
            errors: errors,
          });
        };
      }
    );
  },
};
