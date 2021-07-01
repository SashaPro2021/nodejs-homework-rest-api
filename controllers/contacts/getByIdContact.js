const contats = require('../../model/contacts.json')

const getByIdContact = (req, res) => {
  const { contactId } = req.params
  const contact = contats.find((item) => item.id === Number(contactId))
  if (!contact) {
    res.status(404).json({
      status: 'error',
      code: 404,
      message: 'Not found',
    })
    return
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result: contact,
    },
  })
}

module.exports = getByIdContact
