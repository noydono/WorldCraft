const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  pseudo: {
    type: String,
    required: [true, "Pseudo obligatoire"],
    unique: true
  },
  email: {
    type: String,
    required: [true, "Email obligatoire"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Password obligatoire"]
  },
  role: {
    type: String,
    default: "non assigner"
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isVerified: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: {
    createdAt: 'created_at'
  }
});

userSchema.pre("save", async function (next) {

  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

userSchema.statics.generateAuthToken = async function (user) {
 
  const token = jwt.sign({
      _id: user._id,
      pseudo: user.pseudo,
      email: user.email,
      created_at: user.created_at,
      role: user.role,
      isVerified: user.isVerified,
      isAdmin: user.isAdmin
    },
    "secret");
  return token;

};

userSchema.statics.findByCredentials = async (email, password) => {

  const user = await User.find({email: email})

  if (user.length === 0) {

    throw new Error("Utilisateur introuvable")

  } else {

    const isMatch = await bcrypt.compare(password, user[0].password);
    if (!isMatch) {
      return new Error("Password incorrect")
    } else {
      return user
    }
    
  }



};

const User = mongoose.model("User", userSchema);
module.exports = User;