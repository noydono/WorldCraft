const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = mongoose.Schema({

  username: {
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
  tokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
  ]
},{ timestamps: { createdAt: 'created_at' }});

userSchema.pre('save', function (next) {
  bcrypt.hash(this.password, 10, (err, encrypted) => { 
    /* istanbul ignore if */
    if(err){
      console.log("LogModelUserEncrytpePassword: " + err)
    }
    this.password = encrypted
    next()                                                
  })
})

userSchema.methods.generateAuthToken = async function() {
  const user = this;
  const token = jwt.sign({ 
    _id: user._id, 
    username: user.username, 
    email: user.email, 
    created_at : user.created_at, 
  },
  process.env.USERSECRET);
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
  let errors = []
  const user = await User.findOne({ email : email});
  if(!user){
    errors.push({ email: "email doesnt exit" });
    return {
      hasErrors:true,
      errors: errors
    };
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if(isPasswordMatch === false){
    errors.push({ password: "Password doesn't match" });
    return {
      hasErrors:true,
      errors: errors
    };
  }
  return user;

};
const User = mongoose.model("User", userSchema);
module.exports = User;