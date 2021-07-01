const contats = require('../../model/contacts.json')
const writeContacts = require('../../writeContacts')
const del = (req, res) => {
  const { contactId } = req.params
  const index = contats.findIndex((item) => item.id === Number(contactId))
  const deleteProducts = contats[index]
  contats.splice(index, 1)
  writeContacts(contats)
  res.json({
    status: 'success',
    code: 200,
    data: {
      result: deleteProducts,
    },
  })
}

module.exports = del
