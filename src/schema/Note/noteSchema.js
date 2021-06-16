const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Notechema = new Schema({
    email: { type: String, default: '' },
    create_date : { type: String, default: 'ngày 9-5-2021' },
    content: { type: String, default: '' },

}, {
    collection: 'note'
}, {
    timestamps: true,
});

module.exports = mongoose.model('Note', Notechema);