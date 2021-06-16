const router = require('express').Router()
const uploadImage = require('../config/middleware/uploadImage')
const uploadAudio = require('../config/middleware/uploadAudio')
const uploadCtrl = require('../app/controllers/uploadCtrl')


router.post('/upload_avatar', uploadImage, uploadCtrl.uploadAvatar);
router.post('/upload_img', uploadImage, uploadCtrl.uploadImgTopic);

router.post('/upload_audio', uploadAudio, uploadCtrl.uploadAudioTopic)

module.exports = router