const Question = require('../../../../schema/Question/questionP1');
const TopicL = require('../../../../schema/Topic/TopicL');

module.exports = {
    async getQuestionModel(id, cb) {
        try {

            let question = await TopicL.findOne({ _id: id }).populate('question')
           
            cb(null, question.question)
        } catch (error) {
            cb(error, null)
        }
    },
    async getOneQuestionModel(id, cb) {
        try {
            let question = await Question.findOne({ _id: id })
            cb(null, question)
        } catch (error) {
            cb(error, null)
        }
    },
    async addQuestionModel(idTopic, question, cb) {
        try {
            const topic = await TopicL.findOne({ _id: idTopic })
            
            let questionNew = await new Question(question)

            await questionNew.save()

            topic.question.push(questionNew._id)

            await topic.save()

            cb(null, questionNew)

        } catch (error) {
            cb(error, null)
        }
    },
    async updateQuestionModel(id, question, cb) {

        try {
            let rs = await Question.findByIdAndUpdate(id, question)
            await rs.save()
            cb(null, rs)
        } catch (error) {
            cb(error, null)
        }
    },
    async deleteQuestionModel(id, cb) {
        try {
            let rs = await Question.deleteOne({ _id: id })
          
            cb(null, rs)

        } catch (error) {
            cb(error, null)
        }
    }
}
