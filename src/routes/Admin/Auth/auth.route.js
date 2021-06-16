const express = require('express');
const router = express.Router();

const { login, register, confirmEmail } = require('../../../app/controllers/Admin/Auth/auth.controll');
const { isVerify } = require("../../../config/middleware/verifyToken")


router.post('/login', login);


router.post("/register", register);
router.post("/confirm-email", confirmEmail);


module.exports = router;
