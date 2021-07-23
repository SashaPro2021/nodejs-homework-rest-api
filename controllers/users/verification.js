const { user: service } = require('../../services')

const verification = async (req, res, next) => {
  try {
    const result = await service.verify(req.params)
    if (!result) {
      res.status(404).json({
        status: 'error',
        code: 404,
        message: 'Your verification token is not valid. Contact with administaration'
      })
      return
    }
    res.json({
      status: 'success',
      code: 200,
      data: {
        message: 'Verification successful'
      },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = verification
