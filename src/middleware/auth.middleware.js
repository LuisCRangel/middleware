// Middleware para proteger mis rutas

// Passport tiene diferentes estrategias para manejar logins(barer, jwt, facebook, google, oath, etc)
const JwtStrategy = require('passport-jwt').Strategy

//Extraer el token de los headers de mi peticion
const ExtractJwt = require('passport-jwt').ExtractJwt
const passport = require('passport')

const jwtSecret = require('../../config').api.jwtSecret
const {findUsersById} = require('../users/users.controllers')

  const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: jwtSecret
  }
  passport.use(
    new JwtStrategy(options, async(tokenDecoded, done)=> {
      try {
        const user = await findUsersById(tokenDecoded.id)
        if (!user) {
          return done(null, false ) // no existe un error pero tampoco existe el usuario
        }
        return done(null, tokenDecoded) // No existe un error, pero si existe el usuario
      } catch (error) {
        return done(error, false) // si existe un error, pero no existe el usuario
      }
    })
  )


module.exports = passport