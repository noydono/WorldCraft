
const Sujet = require("../dbModels/sujetModel.js");

module.exports = {

    /*
    *  setSujet:
    *  create sujet
    * 
    * * */

    setSujet: (req, res) => {

        var data = {
            ...req.body
        }

        Sujet.create(data, (err) => {
            if (err) {
                console.log('erreur  setSujet : **********' + err)
            } else {
                console.log('setSujet success')
                res.send()
            }
        })

    },

    /*
    *  getSujet:
    *  get all sujet by section_id
    * 
    * * */

    getSujet: async (req, res) => {

        var id = req.params.id
        var data = await Sujet.find({ section_id: id });
        res.send(data)

    },

    /*
    *  getSujetId:
    *  get a sujet versus id 
    * 
    * * */

    getSujetId: async (req, res) => {

        var id = req.params.id
        var data = await Sujet.find({ _id: id });
        res.send(data)

    }

};
