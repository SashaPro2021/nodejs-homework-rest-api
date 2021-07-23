const { User } = require('../models')

const getOne = (filter) => {
  return User.findOne(filter)
}

const add = ({ password, ...data }) => {
  const newUser = new User(data)
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
  console.log(result)
  return result
}

const verify = ({ token }) => {
  const tokenData = User.findByField({ verifyToken: token })
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
