const { handleMarkModel } = require('../../../model/User/Mark/mark.model')

module.exports = {
    async mark(req, res) {

        const { point, idUser } = req.body;
        const idTopic = req.params.idTopic;
        let markUser = {
            idUser: idUser,
            idTopic: idTopic,
            point: point
        }

        handleMarkModel(markUser, (err, result) => {
            console.log(result);
            if (err) return res.json(err)
            return res.status(200).json({ data: result });

        })

    },
}
