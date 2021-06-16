const express = require('express');
const router = express.Router();

const { getQuestion, getOneQuestion,
    addQuestion, updateQuestion,
    deleteQuestion } = require('../../../app/controllers/Admin/Question/question.controll')

router.get('/question-1/:id', getQuestion);
router.get('/question-1/detail/:id', getOneQuestion);
router.post('/question-1/:idTopic', addQuestion);
router.put('/question-1/:id', updateQuestion);
router.delete('/question-1/:id', deleteQuestion);


module.exports = router;