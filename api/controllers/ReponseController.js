const Reponse = require('../dbModels/reponseModel.js');

module.exports = {

    setReponse: (req, res) => {

        try {

            var data = {
                ...req.body
            }

            Reponse.create(data, (err) => {
                if (err) {
                    console.log('erreur  setReponse : **********' + err)
                    res.status(400).json({err:err})
                } else {
                    console.log('setReponse success')
                    res.end()
                }
            })

        } catch (err) {
            res.status(400).json({err:err})
        }

    },
    getReponse: async (req, res) => {
        try{
            var id = req.params.id
            var data = await Reponse.find({ sujet_id: id });
            res.status(201).send(data);

        }catch(err){
            res.status(400).json({err:err})

        }
        
    }

}