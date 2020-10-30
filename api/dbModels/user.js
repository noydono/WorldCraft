const mongoose = require('mongoose'),
 bcrypt = require('bcrypt');


var UserSchema = new mongoose.Schema({

    username: {
        
        type: String,
        unique: true, 

    },
    email: {
        
        type: String,
        unique: true, 
           
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    status:{
        type:String,
        default:'active'
    },
    role:{
        type:String,
        default:'user'
    },
    passwordVerif: String,   
    avatarImg: String,
    avatarName: String
});

// chiffrée le mot de passe
UserSchema.pre('save', function (next) {

    const user = this                                   

    bcrypt.hash(user.passwordVerif, 10, (error, encrypted) => { 
        user.passwordVerif = encrypted
        next()                                                
    })
})

const User = mongoose.model('User', UserSchema);

module.exports = User