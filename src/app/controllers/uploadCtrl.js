const cloudinary = require('cloudinary')
const fs = require('fs')


cloudinary.config({
    cloud_name: 'inuenglish',
    api_key: '819319326997639',
    api_secret: 'PQ5OhO7Ew--MqvALTikB7CYhlHI'
})



const uploadCtrl = {
    uploadAvatar: (req, res) => {
        try {
            const file = req.files.file;

            cloudinary.v2.uploader.upload(file.tempFilePath, {
                folder: 'imgtoeic', width: 150, height: 150, crop: "fill"
            }, async (err, result) => {
                if (err) throw err;

                removeTmp(file.tempFilePath)

                res.json({ url: result.secure_url })
            })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    uploadImgTopic: (req, res) => {
        try {
            const file = req.files.file;

            cloudinary.v2.uploader.upload(file.tempFilePath, {
                folder: 'imgtoeic', width: 150, height: 150, crop: "fill"
            }, async (err, result) => {
                if (err) throw err;

                removeTmp(file.tempFilePath)

                res.json({ url: result.secure_url })
            })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    uploadAudioTopic: (req, res) => {
        try {
            const file = req.files.file;

            cloudinary.v2.uploader.upload(file.tempFilePath, {
                folder: 'audiotoeic'
            }, async (err, result) => {
                if (err) throw err;

                removeTmp(file.tempFilePath)

                res.json({ url: result.secure_url })
            })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }

}


const removeTmp = (path) => {
    fs.unlink(path, err => {
        if (err) throw err
    })
}

module.exports = uploadCtrl