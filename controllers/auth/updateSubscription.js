const { user: service } = require('../../services')

const updateSubscription = async (req, res, next) => {
  const { id } = req.user
  const { subscription } = req.body
  const newSubscr = await service.updateSubscr(id, subscription)
  try {
    if (!newSubscr) {
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
        newSubscr
      }
    })
  } catch (error) {
    next(error)
  }
}

module.exports = updateSubscription
