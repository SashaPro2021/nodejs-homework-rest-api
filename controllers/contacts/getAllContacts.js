const { contact: service } = require('../../services')

const getAllContacts = async (req, res, next) => {
  try {
    const result = await service.getAll({})
    res.json({
      status: 'success',
      code: 200,
      data: {
        result
      }
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
