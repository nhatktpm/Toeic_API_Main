const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../userSchema')


const AnswerSchema = new Schema({
    nameTopic: { type: String, default: '' },
    img: { type: String, default: '' },
    create_date : { type: String, default: '9-5-2021' },
    user: [{
        type: Schema.Types.ObjectId,
        ref: User
    }]
},{
    collection: 'answer'
},{
        timestamps: true,
    },
);

// Add plugins




module.exports = mongoose.model('Mark', AnswerSchema);