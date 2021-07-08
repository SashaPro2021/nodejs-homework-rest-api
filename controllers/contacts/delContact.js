const { contact: service } = require('../../services')
// const contats = require('../../model/contacts.json')
// const writeContacts = require('../../writeContacts')

const delContact = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await service.del(id)
    res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        result
      }
    })
  } catch (error) {
    next(error)
  }
  // const { contactId } = req.params
  // const index = contats.findIndex((item) => item.id === Number(contactId))
  // const deleteProducts = contats[index]
  // contats.splice(index, 1)
  // writeContacts(contats)
  // res.json({
  //   status: 'success',
  //   code: 200,
  //   data: {
  //     result: deleteProducts,
  //   },
  // })
}

module.exports = delContact
