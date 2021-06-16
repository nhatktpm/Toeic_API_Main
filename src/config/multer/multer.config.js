const multer = require('multer')
const upload = multer({ dest: '../../upload' })


module.exports.uploadPhotoMulter = upload.single('photo')