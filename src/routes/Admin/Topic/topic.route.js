const express = require('express');
const router = express.Router();

const { getTopic,
    addTopic,
    updateTopic,
    deleteTopic,
    getOneTopic,destroyTopic,restoreTopic,getTrashTopic
} = require('../../../app/controllers/Admin/Topic/topic.controll')

router.get('/topic-1/:id', getTopic);
router.get('/topic-1/detail/:id', getOneTopic);
router.get('/topic/trash', getTrashTopic);
router.post('/topic-1', addTopic);
router.post('/topic-1/:id', deleteTopic);
router.put('/topic-1/:id', updateTopic);
router.patch('/topic/:id', restoreTopic);
router.delete('/topic-1/:id', destroyTopic);



module.exports = router;