const UserModel = require("../models/UserModel")

module.exports = {

    getAll: (req, res) => {
        UserModel.find({},
            [
                "_id",
                "isValide",
                "username"
            ], (err, user) => {
                res.status(200).json(user)
            })
    },

    getMyFriend: async (req, res) => {

        await UserModel
            .findByIdAndUpdate(req.params.id)
            .populate({
                path: 'Friend',
            })
            .exec((err, friends) => {
                if (err) {
                    res.status(422).json({
                        errors: 
                        [{
                            getMyFriend: "l'une ou les deux id ne sont pas correct"
                        }]
                    })
                } else {
                    res.status(200).json(friends)
                }

            })
    },

    addFriend: async (req, res) => {

        UserModel.findByIdAndUpdate(req.params.id, {
                $push: {
                    friends: {
                        _id: req.body._id,
                        username: req.body.username
                    }
                }
            }, 
            {
                new: true,
            },
            (err, user) => {
                if (err) {
                    res.status(422).json({
                        errors: 
                        [{
                            addFriend: "l'une ou les deux id ne sont pas correct"
                        }]
                    })
                } else {
                    res.status(200).json()
                }
            })

    },

    deleteMyFriend: async (req, res) => {

        await UserModel.findByIdAndUpdate(req.params.id, {
                $pull: 
                {
                    friends: 
                    {
                        _id: req.body._id,
                        username: req.body.username
                    }
                }
            }, 
            {
                new: true,
            },
            (err, user) => {
                if (err) {
                    res.status(422).json({
                        errors: 
                        [{
                            removeFriend: "l'une ou les deux id ne sont pas correct"
                        }]
                    })
                } else {
                    res.status(200).json()
                }
            })

    },

};