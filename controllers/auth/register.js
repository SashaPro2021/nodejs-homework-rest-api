const { user: service } = require('../../services')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const register = async (req, res, next) => {
  const { email, password } = req.body
  try {
    const user = await service.getOne({ email })
    if (user) {
      return res.status(409).json({
        status: 'error',
        code: 409,
        message: 'Email in use'
      })
    }
    const newUser = await service.add(password, req.body)
    const { SECRET_KEY } = process.env
    const payload = {
      id: newUser._id,
    }
    const token = jwt.sign(payload, SECRET_KEY)

    res.status(201).json({
      status: 'success',
      code: 201,
      message: 'Success create',
      data: {
        newUser,
        token
      },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = register
