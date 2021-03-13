"use strict";

module.exports = (req, res, next) => {
    let hasErrors = false;
    let errors = [];
    usernameValidator(req.body.username)
    emailValidator(req.body.email)
    passwordValidator(req.body.password)
       
    

    if (hasErrors === true) {
        res.status(422).json({
            errors: errors,
        });
    } else {
        next()
    }

    function usernameValidator(username) {
        const patternPseudo = /^([a-zA-Z0-9-_]{2,36})$/;
        if (!username) {
            
        } else if (patternPseudo.test(username) === false) {
            errors.push({
                username: "Pseudo non valide"
            });
            hasErrors = true;
        }
    };

    function emailValidator(email) {
        const patternEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!email) {
            
        } else if (patternEmail.test(email) === false) {
            errors.push({
                email: "Email non valide"
            });
            hasErrors = true;
        }
    };

    function passwordValidator(password) {
        const patternPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        if (!password) {
            
        } else if (
            patternPassword.test(password) === false
        ) {
            errors.push({
                password: "Password non valide"
            });
            hasErrors = true;
        }
    };

};