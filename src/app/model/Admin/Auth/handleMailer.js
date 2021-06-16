const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../../../../config/env/auth.env");

const btnConfirmStyle = `
    text-align: center;
    position: absolute;
    color: #ffffff;
    width: 240px;
    background-color: #ffa705;
    border-radius: 4px;
    margin-left: -5px;
    top: 180px;
    padding: 10px;
    text-decoration: none;
    font-size: 20;
`;
const divStyle = `
    margin: auto;
    width: 250px;
    height: 180px;
    margin-top: 10px;
    border-radius: 4px;
    padding: 20px;
    box-shadow: -1px 2px 7px 1px #cecece;
`;

const urlRegister = "http://localhost:3000/auth/confirm-email?token=";
const urlForgotPassword = "http://localhost:9599/forgot-password-confirm/?token=";

const templateForgotPassword = (divStyle, style, mailToken) => {
    return (
        "<div style='" +
        divStyle +
        "'> <h3 style='text-align:center'>Xac nhan Email de cap nhat mat khau moi</h3><a href='" +
        urlForgotPassword +
        mailToken +
        "' style='" +
        style +
        "'>Xac Nhan</a></div>"
    );
};

const templateRegister = (divStyle, style, mailToken) => {
    return (
        "<div style='" +
        divStyle +
        "'> <h3 style='text-align:center'>Xác Nhận Email </h3><a href='" +
        urlRegister +
        mailToken +
        "' style='" +
        style +
        "'>Xac Nhan</a></div>"
    );
};

const generateToken = user => {
    let mailToken = jwt.sign(user, jwtSecret, {
        expiresIn: "5m"
    });
    return mailToken;
};

exports.sendEmail = (token, email, isForgot, cb) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "nhathocreact@gmail.com", // generated ethereal user
            pass: "nhathocreact1999",
        }
    });
    if (isForgot) {
        var mailOptions = {
            from: "nhathocreact@gmail.com",
            subject: "Cập nhật mật khẩu",
            to: email,
            html: templateForgotPassword(
                divStyle,
                btnConfirmStyle,
                token
            )
        };
    } else {
        var mailOptions = {
            from: "nhathocreact@gmail.com",
            subject: "Xác nhận Email",
            to: email,
            html: templateRegister(divStyle, btnConfirmStyle, token)
        };

    }
    transporter.sendMail(mailOptions, (err, rs) => {

        if (rs) {
            console.log('thanh cong')
            return cb(null, rs);
        }
        console.log(err)
        return cb(err, null);

    });
};