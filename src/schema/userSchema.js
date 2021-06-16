const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: { type: String, default: '', trim: true },
    password: { type: String, default: '', trim: true },
    fullname: { type: String, default: '' },
    img: { type: String, default: '' },
    role: { type: String, default: 0 },
    creat_at: { type: String, default: 0 },
}, {
    collection: 'user'
});

module.exports = mongoose.model('User', UserSchema);