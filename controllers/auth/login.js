const { user: service } = require('../../services')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const logIn = async (req, res, next) => {
  const { email, password } = req.body
  try {
    const user = await service.getOne({ email })
    if (!user || !user.validatePassword(password) || !user.verify) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Incorrect email or password'
      })
    }
    const payload = {
      id: user._id,
    }
    const { SECRET_KEY } = process.env

    const token = jwt.sign(payload, SECRET_KEY)

    await service.update(user._id, { token })

    res.json({
      status: 'success',
      code: 200,
      data: {
        token
      },
    })
  } catch (error) {
    next(error)
  }
}
module.exports = logIn
