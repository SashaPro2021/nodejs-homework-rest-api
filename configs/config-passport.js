const passport = require('passport')
const passportJWT = require('passport-jwt')
const { user: service } = require('../services')
require('dotenv').config()

const { ExtractJwt, Strategy } = passportJWT
const { SECRET_KEY } = process.env

const settings = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET_KEY,
  passReqToCallback: true
}

passport.use(
  new Strategy(settings, async (req, payload, done) => {
    try {
      const [, token] = req.Authorization.split(' ')
      const user = await service.getOne({ _id: payload.id, token })
      if (!user || !user.token) {
        throw new Error('User not found')
      }
      done(null, user)
    } catch (error) {
      done(error)
    }
  })
)
