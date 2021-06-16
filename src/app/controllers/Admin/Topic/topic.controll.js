const { getTopicModel, addTopicModel,
    updateTopicModel,
    deleteTopicModel, getOneTopicModel,
    destroyTopicModel, restoreTopicModel,
    getTrashTopicModel } = require('../../../model/Admin/Topic/topic.model')
// const { cloudinaryUpload } = require('../../../../config/cloudianary/cloudinary.config')

module.exports = {
    async getTopic(req, res) {
        const idPart = req.params.id
        // console.log(idPart)
        getTopicModel(idPart, (err, result) => {
            if (err) return res.json(err)
            return res.status(200).json({ topics: result }).success(true)
        })
    },
    async getOneTopic(req, res) {
        const idTopic = req.params.id
        // console.log(idPart)
        getOneTopicModel(idTopic, (err, result) => {
            if (err) return res.json(err)
            return res.status(200).json({ topic: result, success: true })
        })
    },
    async addTopic(req, res) {

        const topic = { ...req.body }
        const { img, audio } = req.body

        addTopicModel(img, audio, topic, (err, result) => {
            if (err) return res.json(err)
            return res.status(200).json({ topic: result, success: true })
        })
    },
    async updateTopic(req, res) {
        const idTopic = req.params.id
        const nameTopic = req.body.nameTopic
        const { img } = req.body
        const descrip = req.body.descrip
        const translate_vn = req.body.translate_vn
        const translate_eng = req.body.translate_eng
        const audio = req.body.audio
        const part = req.body.part

        const topic = {
            nameTopic: nameTopic,
            img: img,
            descrip: descrip,
            translate_vn: translate_vn,
            translate_eng: translate_eng,
            audio: audio,
            part: part
        }

        updateTopicModel(idTopic, topic, (err, result) => {
            if (err) return res.json(err)
            return res.status(200).json({ data: result, success: true })
        })
    },
    async deleteTopic(req, res) {
        const idTopic = req.params.id
        deleteTopicModel(idTopic, (err, result) => {
            if (err) return res.json(err)
            return res.status(200).json({ id: idTopic, rs: result })
        })
    }, async destroyTopic(req, res) {
        const idTopic = req.params.id
        destroyTopicModel(idTopic, (err, result) => {
            if (err) return res.json(err)
            return res.status(200).json(result)
        })
    },
    async restoreTopic(req, res) {
        const idTopic = req.params.id
        restoreTopicModel(idTopic, (err, result) => {
            if (err) return res.json({ err: err, success: false })
            return res.status(200).json(result)
        })
    },
    async getTrashTopic(req, res) {

        getTrashTopicModel((err, result) => {
            if (err) return res.json({ err: err })
            return res.status(200).json({ topicTrash: result, success: true })
        })
    }

}