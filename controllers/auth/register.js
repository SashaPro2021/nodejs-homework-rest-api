const { user: service } = require('../../services')
const jwt = require('jsonwebtoken')
const sendMail = require('../../configs/config-email')
const { nanoid } = require('nanoid')
require('dotenv').config()

const register = async (req, res, next) => {
  const { email } = req.body
  const verifyToken = nanoid()
  try {
    const user = await service.getOne({ email })
    if (user) {
      return res.status(409).json({
        status: 'error',
        code: 409,
        message: 'Email in use'
      })
    }
    const newUser = await service.add(req.body)
    const { SECRET_KEY } = process.env
    const payload = {
      id: newUser._id,
    }
    const token = jwt.sign(payload, SECRET_KEY)
    await sendMail(email, verifyToken)

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
