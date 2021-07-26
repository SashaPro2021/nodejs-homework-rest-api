const { emailSchema } = require('../../utils/validateSchemas/users')
const { user: service } = require('../../services')
const sendMail = require('../../configs/config-email')

const resendingEmail = async (req, res, next) => {
  const { email } = req.body
  const { verifyToken } = req.params

  try {
    const { error } = emailSchema.validate({ email })
    if (error) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'missing required field email'
      })
    }
    const user = await service.getOne({ email })
    if (!user) {
      return res.status(404).json({
        status: 'error',
        code: 404,
        message: 'Not Found'
      })
    }
    if (user.verify) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Verification has already been passed'
      })
    }
    await sendMail({ email, verifyToken })

    res.status(200).json({
      status: 'success',
      code: 200,
      message: 'Verification email sent'
    })
  } catch (error) {
    next(error)
  }
}

module.exports = resendingEmail
