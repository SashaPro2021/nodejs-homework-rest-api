const nodemailer = require('nodemailer')
require('dotenv').config()

const { EMAIL_PASSWORD } = process.env

const config = {
  host: 'mail.meta.ua',
  port: 465,
  secure: true,
  auth: {
    user: 'sashaproz@meta.ua',
    pass: EMAIL_PASSWORD
  }
}

const transporter = nodemailer.createTransport(config)

const sendMail = async (email, verifyToken) => {
  const msg = {
    to: email,
    from: 'sashaproz@meta.ua',
    subject: 'Please verify your account',
    html: `Welcome to our application! To verify your account please go by <a href="http://localhost:3000/api/users/verify${verifyToken}></a>`,
  }
  try {
    const result = await transporter.sendMail(msg)
    return result
  } catch (error) {
    throw new Error()
  }
}

module.exports = sendMail
