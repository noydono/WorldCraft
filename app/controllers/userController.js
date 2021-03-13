const UserModel = require("../models/UserModel")


module.exports = {

    register: async (req, res) => {


        const checkEmail = await UserModel.findOne({email:req.body.email});
        
        if (checkEmail) {

            res.status(422).json({
                errors: [{
                    email: "L'email existe déjà"
                }],
            });

        } else {

            let user = new UserModel(req.body);
            user.save((err, user) => {
                /* istanbul ignore if */
                if (err) {
                    // console.log(err);
                } else {
                    res.status(201).json({
                        _id: user._id,
                        username: user.username
                    })
                }
            });
            await user.generateAuthToken();
        }

    },

    login: async (req, res) => {

        const user = await UserModel.findByCredentials(req.body.email, req.body.password);
        if (user.hasErrors) {
            res.status(422).json({
                errors: user.errors,
            });
        } else {
            const token = await user.generateAuthToken();
            res.status(200).json({
                user: {
                    _id: user._id,
                    username: user.username,
                    email: user.email,
                    created_at: user.created_at
                },
                token,
            });
        }
        
    },

    update: async (req, res) => {

        await UserModel.findByIdAndUpdate(
            req.params.id, req.body, 
            {
                new: true,
                omitUndefined: true,
                fields: { "_id":1, "username": 1, }
            },
            (err, user) => {
                if (err) {                    
                    res.status(422).json({
                        errors: [{
                            update: "User introuvable"
                        }],
                    });
                } else {
                    res.status(200).json(user);
                }
            }
        );

    },

    delete: async (req, res) => {

        await UserModel.findByIdAndDelete(req.params.id, 
            [
                "_id",
                "username",
            ],
            (err, user) => {
            if (err) {
                res.status(422).json({
                    errors: [{
                        delete: "User introuvable"
                    }],
                });
            } else {
                res.status(200).json(user)
            }
        })

    }

};