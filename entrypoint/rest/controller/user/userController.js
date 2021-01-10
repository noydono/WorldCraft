const Validator = require("../../use_case/Validator");
module.exports = {
  register: (req, res) => {
    
    let { username, email, password } = req.body;
    let errors = new Validator(username, email, password);

    if (errors.hasErrors) {
      res.status(422).json({
        message: "Invalid entry",
        errors: errors.errors,
      });
    } else {
      res.status(201).json({
        message: "User created!",
        errors: errors.errors,
      });
    }
  },
};
