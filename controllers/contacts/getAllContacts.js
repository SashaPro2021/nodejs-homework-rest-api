const { contact: service } = require('../../services')

const getAllContacts = async (req, res, next) => {
  const { query } = req
  try {
    const contacts = await service.getAll(query)
    res.json({
      status: 'success',
      code: 200,
      data: { ...contacts }
    })
  } catch (error) {
    next(error)
  }
  // res.json({
  //   status: 'success',
  //   code: 200,
  //   data: {
  //     result: contacts,
  //   },
  // })
}

module.exports = getAllContacts
