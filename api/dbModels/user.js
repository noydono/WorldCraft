const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = mongoose.Schema({
  pseudo: {
    type: String,
    required: [true, "Pseudo obligatoire"]
  },
  email: {
    type: String,
    required: [true, "Email obligatoire"]
  },
  password: {
    type: String,
    required: [true, "Password obligatoire"]
  },
  isAdmin: {
    type: Boolean,
    default : false,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
  ]
});

//this method will hash the password before saving the user model
userSchema.pre("save", async function(next) {

  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

//this method generates an auth token for the user
userSchema.methods.generateAuthToken = async function() {

  const user = this;
  const token = jwt.sign({ _id: user._id, name: user.pseudo, email: user.email },
  "secret",{expiresIn : "1h"});
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;

};

//this method search for a user by email and password.
userSchema.statics.findByCredentials = async (email, password) => {

  const user = await User.findOne({ email });
  if (!user) {

    throw new Error({ error: "Email ou password non valide" });

  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {

    throw new Error({ error: "Email ou password non valide" });

  }

  return user;

};

const User = mongoose.model("User", userSchema);
module.exports = User;