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
  role:{
    type:String,
    default:"non assigner"
  },
  isAdmin: {
    type: Boolean,
    default : false,
  },
  isVerified:{
    type: Boolean,
    default: false
  },
  tokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
  ]
},{ timestamps: { createdAt: 'created_at' }});

userSchema.pre("save", async function(next) {

  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

userSchema.methods.generateAuthToken = async function() {

  const user = this;
  const token = jwt.sign({ 
    _id: user._id, 
    pseudo: user.pseudo, 
    email: user.email, 
    created_at : user.created_at, 
    role : user.role,
    isVerified : user.isVerified,
    isAdmin: user.isAdmin
  },
  "secret");
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