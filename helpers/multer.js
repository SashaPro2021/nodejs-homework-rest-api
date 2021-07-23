const multer = require('multer')
const path = require('path')

const tmpDir = path.join(process.cwd(), './tmp')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, tmpDir)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },
  fileFilter(req, file, cb) {
    if (file.mimetype.includes('image')) {
      cb(null, true)
    }
    cb(null, false)
  },
  limits: { fileSize: 2000000 }
})

const avatar = multer({
  storage
})

module.exports = avatar
