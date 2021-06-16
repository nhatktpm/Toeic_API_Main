const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Question = require('../Question/questionP2')
const Comment = require('../Comment/commentSchema')

const TopicSchema = new Schema({
    nameTopic: { type: String, default: '' },
    img: { type: String, default: '' },
    descrip: { type: String, default: '' },      
    translate_vn: { type: String, default: '' },
    translate_eng: { type: String, default: '' },
    part: { type: String, default:'60afd17c7334e4484c14d15d'},
    slug: { type: String, default: 'topic-5' },
    question: [{
        type: Schema.Types.ObjectId,
        ref: Question
    }],
    comment: [{
        type: Schema.Types.ObjectId,
        ref: Comment
    }],
}, {
    collection: 'topic'
});

module.exports = mongoose.model('Topic5', TopicSchema);