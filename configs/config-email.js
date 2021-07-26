const nodemailer = require('nodemailer')
require('dotenv').config()

const { EMAIL_PASSWORD } = process.env

const config = {
  host: 'smtp.meta.ua',
  port: 465,
  secure: true,
  auth: {
    user: 'sashaproz@meta.ua',
    pass: EMAIL_PASSWORD
  }
}

const transporter = nodemailer.createTransport(config)

const sendMail = ({ email, verifyToken }) => {
  const msg = {
    from: 'sashaproz@meta.ua',
    to: email,
    subject: 'Please verify your account',
    html: `Welcome to our application! To verify your account please go by <a href="http://localhost:3000/api/users/verify/${verifyToken}"></a>`,
  }
  transporter
    .sendMail(msg)
    .then((info) => console.log(info))
    .catch((err) => console.log(err))
}

module.exports = sendMail
