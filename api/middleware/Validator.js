"use strict";

module.exports = class {
  constructor(username, email, password) {
    this.hasErrors = false;
    this.errors = [];
    this.pseudoValidator(username)
    this.emailValidator(email)
    this.passwordValidator(password)
    return {
        hasErrors: this.hasErrors,
        errors: this.errors
    }
  }

  pseudoValidator(username) {
    const patternPseudo = /^([a-zA-Z0-9-_]{2,36})$/;
    if (!username || patternPseudo.test(username) === false) {
      this.errors.push({ username: "Username not received or invalid" });
      this.hasErrors = true;
    }
  }
  emailValidator(email) {
    const patternEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!email || patternEmail.test(email) === false) {
      this.errors.push({ email: "Email not received or invalid" });
      this.hasErrors = true;
    }
  }
  passwordValidator(password) {
    const patternPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    if (
      !password ||
      patternPassword.test(password) === false
    ) {
      this.errors.push({ password: "Password not received or invalid" });
      this.hasErrors = true;
    }
  }
};
