const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Question = require('../Question/questionP2')

const TopicSchema = new Schema({
    nameTopic: { type: String, default: '' },
    img: { type: String, default: '' },
    descrip: { type: String, default: '' },
    part: { type: String, default: '' },
    audio: { type: String, default: '' },
    part: { type: String, default: '' },
    translate_vn: { type: String, default: '' },
    translate_eng: { type: String, default: '' },
    question: [{
        type: Schema.Types.ObjectId,
        ref: Question
    }]


}, {
    collection: 'topic'
});

module.exports = mongoose.model('Topic2', TopicSchema);