const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    cauhoi: { type: String, default: '' },
    caua: { type: String, default: 'a' },
    caub: { type: String, default: 'b' },
    cauc: { type: String, default: 'c' },
    caud: { type: String, default: 'd' },
    dapandung: { type: String, default: 'e' },
    explain: { type: String, default: 'e' },
    img: { type: String, default: '' },
   

}, {
    collection: 'question'
});

module.exports = mongoose.model('Question', QuestionSchema);