const Part = require('../../../../schema/Part/partSchema');

module.exports = {
    async getPartmodel(cb) {
        try {
            var part = await Part.find({})
            cb(null, part)
        } catch (error) {
            cb(error, null)
        }
    },
    async getPartDetailModel(id, cb) {
        var part = await Part.findOne({ _id: id })
        cb(null, part)
    },
    async updatePartmodel(id, part, cb) {
        try {
            let rs = await Part.findByIdAndUpdate(id, part)
            await rs.save()
            cb(null, id)
        } catch (error) {
            cb(error, null)
        }
    }
}
