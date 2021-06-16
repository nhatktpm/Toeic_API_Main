module.exports = {
    async mark(req, res) {

        const { id, idUser } = req.body;
        const idTopic = req.params.idTopic;
        let markUser = {
            idUser: idUser,
            idTopic: idTopic,
            point: point
        }       

    },
}
