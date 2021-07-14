const { contact: service } = require('../../services')

const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await service.getAll(req.query)
    console.log(contacts)
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
