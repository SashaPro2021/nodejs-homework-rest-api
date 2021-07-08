const { contact: service } = require('../../services')

// const contacts = require('../../model/contacts.json')
// const { contactCreateSchema } = require('../../utils/validateSchemas')
// const writeContacts = require('../../writeContacts')

// const { v4 } = require('uuid')

const addContact = async (req, res, next) => {
  try {
    const result = await service.add(req.body)
    if (!result) {
      res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Bad request',
      })
      return
    }
    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        result
      }
    })
  } catch (error) {
    next(error)
  }

  // const { error } = contactCreateSchema.validate(req.body)
  // if (error) {
  //   res.status(400).json({
  //     status: 'error',
  //     code: 404,
  //     message: error.message,
  //   })
  //   return
  // }

  // const newContact = { ...req.body, id: v4() }
  // contacts.push(newContact)
  // writeContacts(contacts)
  // res.status(201).json({
  //   status: 'success',
  //   code: 201,
  //   data: {
  //     result: newContact
  //   }
  // })
}

module.exports = addContact
