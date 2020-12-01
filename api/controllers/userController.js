const User = require("../dbModels/user");

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
        const token = await user.generateAuthToken();
        // here it is calling the method that we created in the model
        res.status(201).json({ data, token });

      }else{
        res.json({err: " email pseudo non unique "})
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
        return res.status(401).json({ error: "Login failed! Check authentication credentials" });
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