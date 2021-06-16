const TopicL = require('../../../../schema/Topic/TopicL.js');
const Topic2 = require('../../../../schema/Topic/TopicP2');
const Topic5 = require('../../../../schema/Topic/TopicP5');


module.exports = {
    async getTopicModel(id, cb) {
        try {
            let topic = await TopicL.find({ part: id })
            cb(null, topic)
        } catch (error) {
            cb(error, null)
        }
    },
    async getOneTopicModel(id, cb) {
        try {
            let topic = await TopicL.findOne({ _id: id })
            cb(null, topic)
        } catch (error) {
            cb(error, null)
        }
    },
    async addTopicModel(img, audio, topic, cb) {

        const { part } = topic

        if (part == "60197e3072dbac87905bc3b4") {

            const { nameTopic, descrip, translate_vn, translate_eng } = topic

            const datatopic = {
                nameTopic: nameTopic,
                img: img,
                descrip: descrip,
                translate_vn: translate_vn,
                translate_eng: translate_eng,
                audio: audio,
                part: part
            }

            try {
                let topicNew = await new TopicL(datatopic)

                await topicNew.save()
                cb(null, topicNew)

            } catch (error) {
                cb(error, null)
            }
        }
        if (part == "601d000683913f31d8e3a85f") {

            const { nameTopic, descrip, translate_vn, translate_eng } = topic

            const datatopic = {
                nameTopic: nameTopic,
                img: img,
                descrip: descrip,
                translate_vn: translate_vn,
                translate_eng: translate_eng,
                audio: audio,
                part: part
            }
            
            try {
                let topicNew = await new Topic2(datatopic)

                await topicNew.save()
                cb(null, topicNew)

            } catch (error) {
                cb(error, null)
            }
        }
        if (part == "60afd17c7334e4484c14d15d") {
            try {


                let topicNew = await new Topic5(topic)

                await topicNew.save()
                cb(null, topicNew)

            } catch (error) {
                cb(error, null)
            }
        }


    },
    async updateTopicModel(id, topic, cb) {
        let rs = await TopicL.findByIdAndUpdate(id, topic)
        await rs.save()
        cb(null, rs)

    },
    async deleteTopicModel(id, cb) {
        try {
            let rs = await TopicL.delete({ _id: id })
            console.log(rs)
            cb(null, rs)

        } catch (error) {
            cb(error, null)
        }
    },
    async destroyTopicModel(id, cb) {
        try {
            let rs = await TopicL.deleteOne({ _id: id })
            console.log(rs)
            cb(null, rs)

        } catch (error) {
            cb(error, null)
        }
    },
    async restoreTopicModel(id, cb) {
        try {
            let rs = await TopicL.restore({ _id: id })
            console.log(rs)
            cb(null, rs)

        } catch (error) {
            cb(error, null)
        }
    },
    async getTrashTopicModel(cb) {
        try {
            let topicTrash = await TopicL.findDeleted({})

            cb(null, topicTrash)
        } catch (error) {
            // cb(error, null)
            console.log(error)
        }
    },
}
