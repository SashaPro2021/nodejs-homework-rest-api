const addContact = require('./addContact')
const delContact = require('./delContact')
const getAllContacts = require('./getAllContacts')
const getByIdContact = require('./getByIdContact')
const updateContact = require('./updateContact')
const updateFavoriteContact = require('./updateFavoriteContact')

module.exports = {
  getAllContacts,
  addContact,
  delContact,
  getByIdContact,
  updateContact,
  updateFavoriteContact
}
