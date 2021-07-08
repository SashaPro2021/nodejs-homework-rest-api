const { contact: service } = require('../../services')

const getByIdContact = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await service.getOne(id)
    if (!result) {
      return res.status(404).json({
        status: 'error',
        code: 404,
        message: 'Not found'
      })
    }
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
  // const { contactId } = req.params
  // const contact = contats.find((item) => item.id === Number(contactId))
  // if (!contact) {
  //   res.status(404).json({
  //     status: 'error',
  //     code: 404,
  //     message: 'Not found',
  //   })
  //   return
  // }
  // res.json({
  //   status: 'success',
  //   code: 200,
  //   data: {
  //     result: contact,
  //   },
  // })
}

module.exports = getByIdContact
