const { user: service } = require('../../services')

const logout = async (req, res, next) => {
  console.log(req.user)
  const { _id } = req.user
  try {
    await service.updateToken(_id, { token: null })
    res.json({
      status: 'success',
      code: 204,
      message: 'No Content',
    })
  } catch (error) {
    next(error)
  }
}
module.exports = logout
