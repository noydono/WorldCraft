"use strict";

module.exports = (req,res,next) => {
  
    let hasErrors = false;
    let errors = [];
    pseudoValidator(req.body.username)
    emailValidator(req.body.email)
    passwordValidator(req.body.password)
    if(hasErrors === true){
      res.status(422).json({
        message: "Invalid entry",
        errors: errors,
      });
    }else{
      next()
    }

    function pseudoValidator(username){
      const patternPseudo = /^([a-zA-Z0-9-_]{2,36})$/;
      if (!username || patternPseudo.test(username) === false) {
        errors.push({ username: "Username not received or invalid" });
        hasErrors = true;
      }
    };
    function emailValidator(email){
      const patternEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    
      if (!email || patternEmail.test(email) === false) {
        errors.push({ email: "Email not received or invalid" });
        hasErrors = true;
      }
    };
    function passwordValidator(password){
      const patternPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    
      if (
        !password ||
        patternPassword.test(password) === false
      ) {
        errors.push({ password: "Password not received or invalid" });
        hasErrors = true;
      }
    };
    
};

