const passport = require('passport')
const passportJWT = require('passport-jwt')
const { user: service } = require('../services')
require('dotenv').config()

const { ExtractJwt, Strategy } = passportJWT
const { SECRET_KEY } = process.env

const settings = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET_KEY,

}

passport.use(
  new Strategy(settings, async (payload, done) => {
    try {
      const user = await service.getById(payload.id)
      if (!user) {
        throw new Error('User not found')
      }
      done(null, user)
    } catch (error) {
      done(error)
    }
  })
)
