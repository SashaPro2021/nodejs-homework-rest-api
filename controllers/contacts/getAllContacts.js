const contacts = require('../../model/contacts.json')

const getAllContacts = (req, res, next) => {
  res.json({
    status: 'success',
    code: 200,
    data: {
      result: contacts,
    },
  })
}

module.exports = getAllContacts
