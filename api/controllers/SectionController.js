
const Section = require("../dbModels/sectionModel.js");


module.exports = {
    setSection: (req, res) => {

        var data = {
            ...req.body
        }

        Section.create(data, (err) => {
            if (err) {
                console.log('erreur Set SmallCategorie : **********' + err)
            } else {
                console.log('smallCategorie create')
                res.send()
            }
        })
    },

    getSection: async (req, res) => {
        var data = await Section.find({})
        res.send(data)
    }
};
