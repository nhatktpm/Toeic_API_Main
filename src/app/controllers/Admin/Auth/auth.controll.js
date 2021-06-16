const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const salt = 10;
const User = require('../../../../schema/userSchema')
const { getToken } = require('../../../model/Admin/Auth/auth.ad.model');
const { sendEmail } = require("../../../model/Admin/Auth/handleMailer")
const { registerModel } = require("../../../model/Admin/Auth/auth.ad.model")
const { jwtSecret } = require("../../../../config/env/auth.env")



let user = {};

exports.confirmEmail = async (req, res) => {
    try {
        const { tokenUser } = req.body
        const decoded = await jwt.verify(tokenUser, jwtSecret);
        user = {
            fullname: decoded.fullname,
            email: decoded.email,
            password: decoded.password
        };

        let newUser = await new User(user)
        await newUser.save()
        if (newUser) {
            res.json({ msg: "Xác Nhận Tài Khoản Thành Công" })
        } else {
            res.json({ err: "loi mail" })
        }
    } catch (error) {
        res.json({ msg: " xac nhan that bai" })
    }


};

exports.login = async (req, res) => {

    let email = req.body.email,
        password = req.body.password;

    const user = await User.findOne({ email: email })

    if (!user) {
        res.json("Wrong Email");
    } else {
        bcrypt.compare(password, user.password, (err, isHash) => {
            if (isHash) {
                let token = getToken({ userId: user._id, email: user.email })
                res.status(200).json({ user: user, jwt: token })
            } else {
                res.json("Wrong password");
            }
        });
    }

};


exports.register = async (req, res) => {

    const { email, fullname, password } = req.body

    const passwordHash = await bcrypt.hash(password, 10)

    const user = {
        email: email,
        fullname: fullname,
        password: passwordHash
    };
    const token = createAccessToken(user)


    registerModel(token, email,
        (err, rs) => {
            if (err) {
                res.json(err);
            } else {
                res.status(200).json(rs);
            }
        }
    );

};

const createAccessToken = (payload) => {
    return jwt.sign(payload, jwtSecret, { expiresIn: '1h' })
}

