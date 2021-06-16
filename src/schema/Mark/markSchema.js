const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Note = require('../Note/noteSchema')

const MarkSchema = new Schema({
    idUser: { type: String, default: '' },
    idTopic: { type: String, default: '' },
    point: { type: String, default: '0' },
    create_date: { type: String, default: 'ngày 9-5-2021' },
    note: [{
        type: Schema.Types.ObjectId,
        ref: Note
    }]

}, {
    collection: 'mark'
});

module.exports = mongoose.model('Mark', MarkSchema);