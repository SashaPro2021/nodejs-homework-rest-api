const { contact: service } = require('../../services')

const updateFavoriteContact = async (req, res, next) => {
  const { id } = req.params
  const { favorite } = req.body
  try {
    const result = await service.updateFavorite(id, favorite)
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
}

module.exports = updateFavoriteContact
