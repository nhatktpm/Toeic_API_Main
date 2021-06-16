const express = require('express');
const router = express.Router();

const { mark } = require('../../../app/controllers/User/Mark/mark.controll')


router.post('/mark/:idTopic', mark);



module.exports = router;