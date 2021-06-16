const Mark = require('../../../../schema/Mark/markSchema');
const Question = require('../../../../schema/Question/questionP1');
const TopicL = require('../../../../schema/Topic/TopicL');


module.exports = {
    async handleMarkModel(markUser, cb) {
        try {
            let markNew = await new Mark(markUser)

            markNew.save()

            cb(null, true)

        } catch (error) {
            cb(error, "loi roi")
        }
    }

}
