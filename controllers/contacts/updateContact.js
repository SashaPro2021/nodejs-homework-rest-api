// const contacts = require('../../model/contacts.json')
// const { contactUpdateSchema } = require('../../utils/validateSchemas')
// const writeContacts = require('../../writeContacts')
const { contact: service } = require('../../services')

const updateContact = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await service.update(id, req.body)
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
  // const { error } = contactUpdateSchema.validate(req.body)
  // if (error) {
  //   res.status(400).json({
  //     status: 'error',
  //     code: 404,
  //     message: error.message,
  //   })
  //   return
  // }
  // const { contactId } = req.params
  // const index = contacts.findIndex((item) => item.id === Number(contactId))
  // if (index === -1) {
  //   res.status(404).json({
  //     status: 'error',
  //     code: 404,
  //     message: 'Not found',
  //   })
  //   return
  // }
  // contacts[index] = { ...req.body, contactId }
  // writeContacts(contacts)
  // res.json({
  //   status: 'success',
  //   code: 200,
  //   data: {
  //     result: contacts[index],
  //   },
  // })
}

module.exports = updateContact
