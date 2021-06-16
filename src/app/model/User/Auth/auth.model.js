const jwt = require("jsonwebtoken");
const env = require("../../../../config/env/auth.env");

exports.getToken = user => {
    let token = jwt.sign(user, env.jwtSecret, {
        expiresIn: 3 * 9000
    });
    return token
};