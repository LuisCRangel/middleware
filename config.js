require('dotenv').config() // esta linea de aqui se encarga de importar la variable de entorno del archivo .env

module.exports = {
  api: {
    port:process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET
  },
  db: {
      user: process.env.DB_USER,
      pass: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      name: process.env.DB_NAME

  }
}
// en caso que la variable no esta declarada podemos usar un or