const contacts = require('../../model/contacts.json')
const { contactSchema } = require('../../utils/validateSchemas')
const writeContacts = require('../../writeContacts')

const { v4 } = require('uuid')

const addContact = (req, res) => {
  const { error } = contactSchema.validate(req.body)
  if (error) {
    res.status(400).json({
      status: 'error',
      code: 404,
      message: error.message,
    })
    return
  }

  const newContact = { ...req.body, id: v4() }
  contacts.push(newContact)
  writeContacts(contacts)
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result: newContact
    }
  })
}

module.exports = addContact
