const { User } = require('../models')
const { nanoid } = require('nanoid')
const sendMail = require('../configs/config-email')

const getOne = (filter) => {
  return User.findOne(filter)
}

const add = ({ email, password }) => {
  const verifyToken = nanoid()
  sendMail({ email, verifyToken })
  const newUser = new User({ email, verifyToken })
  newUser.setPassword(password)
  return newUser.save()
}

const getById = (id) => {
  return User.findById(id)
}

const update = (id, token) => {
  return User.findByIdAndUpdate(id, token)
}
const updateToken = (id, token) => {
  return User.findByIdAndUpdate(id, token)
}

const updateSubscr = (id, subscription) => {
  return User.findByIdAndUpdate(id, { subscription })
}

const updateAvatar = (id, idCloudAvatar, avatarURL) => {
  return User.findByIdAndUpdate(id, { idCloudAvatar, avatarURL })
}

const getAvatar = (id) => {
  const result = User.findById(id)
  return result
}

const verify = (verifyToken) => {
  const tokenData = User.findOne(verifyToken)
  if (tokenData) {
    tokenData.updateOne({ verify: true, verifyToken: null })
    return true
  }
  return false
}

module.exports = {
  getOne,
  add,
  getById,
  update,
  updateSubscr,
  updateToken,
  updateAvatar,
  getAvatar,
  verify
}
