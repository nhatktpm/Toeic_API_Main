const jwt = require("jsonwebtoken");
const { jwtSecret } = require('../env/auth.env');

exports.isVerify = (req, res, next) => {
    const { token } = req.query;
    if (token) {
        jwt.verify(token, jwtSecret, (err, result) => {
            if (err) return res.status(403).json("Verify fail! Token invalid");
            else {
                req.user = result
                console.log(result);
                return next();
            }
        });
        return
    }
    if (
        req.headers &&
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "JWT"
    ) {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, jwtSecret, (err, user) => {
            if (err) return res.status(403).json("Unauthorized user");
            // req.user = user;   ghi chu
            res.status(200);
            next();
        });
    } else {
        res.status(401).json("Unauthorized user--");
    }
    
};

exports.isVerifyMailToken = (req, res, next) => {
    let { token } = req.query;
    jwt.verify(token, jwtSecret, (err, result) => {
        if (err) return res.status(403).json("Verify fail! Token invalid");
        req.session.email = result.email;
        next();
    });
};

const auth = (req, res, next) => {
    try {
        const token = req.header("Authorization")
        if(!token) return res.status(400).json({msg: "Invalid Authentication."})

        jwt.verify(token, jwtSecret, (err, user) => {
            if(err) return res.status(400).json({msg: "Invalid Authentication."})

            req.user = user
            next()
        })
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

module.exports = auth