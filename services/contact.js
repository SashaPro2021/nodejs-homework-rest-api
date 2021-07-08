const { Contact } = require('../models')

const getAll = () => {
  return Contact.find({})
}

const getOne = (id) => {
  return Contact.findById(id)
}

const add = (body) => {
  return Contact.create(body)
}

const del = (id) => {
  return Contact.findByIdAndDelete(id)
}

const update = (id, body) => {
  return Contact.findByIdAndUpdate(id, body)
}

const updateFavorite = (id, favorite) => {
  return Contact.findByIdAndUpdate(id, { favorite })
}

module.exports = {
  getAll,
  getOne,
  add,
  del,
  update,
  updateFavorite
}
