const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');
const Question = require('../Question/questionP3')
const Comment = require('../Comment/commentSchema')

const TopicSchema = new Schema({
    nameTopic: { type: String, default: '' },
    img: { type: String, default: '' },
    descrip: { type: String, default: '' },
    part: { type: String, default: '601d000683913f31d8e3a85f' },
    audio: { type: String, default: '' },
    translate_vn: { type: String, default: '' },
    translate_eng: { type: String, default: '' },
    slug: { type: String, default: 'topic-2' },
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
}, {
    timestamps: true,
});

TopicSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});


module.exports = mongoose.model('Topic3', TopicSchema);