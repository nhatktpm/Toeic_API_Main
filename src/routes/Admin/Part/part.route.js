const express = require('express');
const router = express.Router();
const {isVerify} = require('../../../config/middleware/verifyToken')
const { getPart,updatePart,getPartDetail } = require('../../../app/controllers/Admin/Part/part.controll')

router.get('/part',getPart);
router.get('/part/:id', getPartDetail);
router.put('/part/:id', updatePart);

module.exports = router;
