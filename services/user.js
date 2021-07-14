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

module.exports = {
  getOne,
  add,
  getById,
  update,
  updateSubscr,
  updateToken
}
