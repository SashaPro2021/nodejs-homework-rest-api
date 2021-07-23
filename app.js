const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const path = require('path')
const cloudinary = require('cloudinary').v2
require('dotenv').config()
require('./configs/config-passport')

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true
})

const avatar = require('./helpers/multer')
const addAvatarFunc = require('./helpers/addAvatarFunc')
const contactsRouter = require('./routes/api/contacts')
const authRouter = require('./routes/api/auth')
const usersRouter = require('./routes/api/users')
const filesRouter = require('./routes/api/files')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, './public/avatars')))

app.use('/api/contacts', contactsRouter)
app.use('/api/users', usersRouter)
app.use('/api/auth', authRouter)
app.use('/api/files', filesRouter, avatar.single('avatar'), addAvatarFunc)

app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    code: 404,
    message: 'Not found'
  })
})

app.use((error, _, res, __) => {
  const { code = 500, message = 'Server error' } = error
  res.status(500).json({
    status: 'fail',
    code,
    message
  })
})

module.exports = app
