const express = require('express')

const useAuth = require('./useAuth')

const { users: ctrl } = require('../../controllers')

const avatar = require('../../helpers/multer')

const router = express.Router()

router.get('/current', useAuth, ctrl.getCurrentUser)
router.get('verify/:token', ctrl.verification)

router.patch('/avatars', useAuth, avatar.single('avatar'), ctrl.updateAvatarUser)

module.exports = router
