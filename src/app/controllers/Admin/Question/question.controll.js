const { getQuestionModel,
    getOneQuestionModel,
    addQuestionModel,
    updateQuestionModel,
    deleteQuestionModel

} = require('../../../model/Admin/Question/question.model')


module.exports = {
    async getQuestion(req, res) {
        const idTopic = req.params.id
        // console.log(idTopic)
        getQuestionModel(idTopic, (err, result) => {
            if (err) return res.json(err)
           
            return res.status(200).json({ questions: result })
        })
    },
    async getOneQuestion(req, res) {
        const idQuestion = req.params.id
        // console.log(idPart)
        getOneQuestionModel(idQuestion, (err, result) => {
            if (err) return res.json(err)
            return res.status(200).json({question : result})
        })
    },
    async addQuestion(req, res) {
        const idTopic = req.params.idTopic
        const { cauhoi, caua, caub, cauc, caud, dapandung, img } = req.body

        const Question = {
            cauhoi: cauhoi,
            img: img,
            caua: caua,
            caub: caub,
            cauc: cauc,
            caud: caud,
            dapandung: dapandung

        }
        addQuestionModel(idTopic, Question, (err, result) => {
            if (err) return res.json(err)
            return res.status(200).json({ question: result, kq: 'secsess' })

        })
    },
    async updateQuestion(req, res) {
        const idQuestion = req.params.id
        const { cauhoi, caua, caub, cauc, caud, dapandung, img } = req.body


        const Question = {
            cauhoi: cauhoi,
            img: img,
            caua: caua,
            caub: caub,
            cauc: cauc,
            caud: caud,
            dapandung: dapandung
        }

        updateQuestionModel(idQuestion, Question, (err, result) => {
            if (err) return res.json(err)
            return res.status(200).json(result)
        })
    },
    async deleteQuestion(req, res) {
        const idQuestion = req.params.id
        deleteQuestionModel(idQuestion, (err, result) => {
            if (err) return res.json(err)
            return res.status(200).json(result)
        })
    }

}