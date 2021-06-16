const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PartSchema = new Schema({
    name: { type: String, default: '' },
    img: { type: String, default: '' },
    descrip: { type: String, default: '' },
    slug: { type: String, default: '' }

}, {
    collection: 'part'
});

module.exports = mongoose.model('Part', PartSchema);