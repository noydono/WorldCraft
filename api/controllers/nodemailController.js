const User = require("../dbModels/userModel.js"),
    nodemailer = require('nodemailer'),
    jwt = require("jsonwebtoken"),
    transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: 'gmail',
        port: '587',
        secure: true,
        auth: {
            user: "noydono.dev@gmail.com",
            pass: process.env.MPDEMAIL
        },
        tls: {
            rejectUnauthorized: false
        }
    })

module.exports = {

    verifMail: async (req, res) => {

        console.log('verifmail');
        const decoded = jwt.verify(req.params.token, "EmailSecret")
        User.findByIdAndUpdate(decoded._id,{
            isVerified : true
        },(err,sucess)=>{
            if(err){
                console.log("err verifMail callback");
            }else{
                console.log(sucess);
                res.redirect('https://worlcraft.herokuapp.com/verifyMail')
            }
        })

    },
}