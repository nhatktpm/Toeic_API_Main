const Answer = require('../../../../schema/Answer/answerSchema');

module.exports = {
    async getAnswerModel(idTopic, user, cb) {
        try {
            let answer = await Answer.find({ topic: idTopic, user: user })
            cb(null, answer)
        } catch (error) {
            cb(error, null)
        }
    },
    async showAnswer(answer, cb) {
        try {
            let topicNew = await new Answer(answer)

            await topicNew.save()
            cb(null, topicNew)

        } catch (error) {
            cb(error, null)
        }
    }
}
