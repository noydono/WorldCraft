module.exports = {
  register: (req, res) => {

    let hasErrors = false ;
    let errors = [];
    const patternPseudo = /^([a-zA-Z0-9-_]{2,36})$/;
    const patternEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const patternPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    

  
  console.log(patternPseudo.test(req.body.username));
	if(!req.body.username || patternPseudo.test(req.body.username) === false){
		errors.push({"username": "Username not received or invalid"})
		hasErrors = true;
  }

  console.log(patternEmail.test(req.body.email));
	if(!req.body.email || patternEmail.test(req.body.email) === false){
		errors.push({"email": "Email not received or invalid"})
		hasErrors = true;
  }
  
  console.log(patternPassword.test(req.body.password));
	if(!req.body.password || patternPassword.test(req.body.password) === false){
		errors.push({"password": "Password not received or invalid"})
		hasErrors = true;
	}

	if(hasErrors){
		//if there is any missing field
		res.status(422).json({
			message: "Invalid entry",
			errors: errors
		});

	}else{
		res.status(201).json({
				message: 'User created!',
				errors: errors
			});
	}
   
  },
};
