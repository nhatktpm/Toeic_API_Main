const jwt = require("jsonwebtoken");
const env = require('../../../../config/env/auth.env');
const { sendEmail } = require("./handleMailer");
const User = require("../../../../schema/userSchema.js");
const { jwtSecret } = require("../../../../config/env/auth.env");

exports.registerModel = async (token,email, cb) => {
    try {
        let user = await User.findOne({ email: email })
        if (user) {
            return cb("Email đã tồn tại");
        } else {
            sendEmail(token ,email, false, (err, user) => {
                if (user) {
                    return cb(null, "Kiểm tra email của bạn");
                }
            });
        }
    } catch (error) {
        cb(error, null)
    }
};


exports.getToken = user => {
    let token = jwt.sign(user, env.jwtSecret, {
        expiresIn: 3 * 9000
    });
    return token
};
