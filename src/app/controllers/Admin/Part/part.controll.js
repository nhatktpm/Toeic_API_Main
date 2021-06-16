const { getPartmodel, updatePartmodel, getPartDetailModel } = require('../../../model/Admin/Part/part.model')
const Partmodel = require('../../../../schema/Part/partSchema')


module.exports = {
    async getPart(req, res) {
        getPartmodel((err, result) => {
            if (err) return res.json(err)
            return res.status(200).json({ parts: result })
        })
    },
    async getPartDetail(req, res) {

        const id = req.params.id

        getPartDetailModel(id, (err, result) => {
            if (err) return res.json(err)
            return res.status(200).json({ data: result })
        })
    },

    async updatePart(req, res) {

        const { name, descrip, img } = req.body
        const idPart = req.params.id        
       
        
        const part = {
            name: name,
            img: img,
            descrip: descrip
        }
        console.log(part);
        updatePartmodel(idPart, part, (err, result) => {
            if (err) return res.json(err)
            return res.status(200).json(result)
        })
    }

}
