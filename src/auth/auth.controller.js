// tenemos que definir que tipo de autenticacion estamos manejando en este caso email o username, en este caso no estamos utilizando un telefono 
//? email
//? password
const { findUserByEmail} = require('../users/users.controllers')
const { comparePassword } = require('../utils/crypto')

// esta funcion va a validar si los datos pertenecen o no a un usuario
const checkUserCredential = async (email, password) => {

  try {
    const user = await findUserByEmail(email)
    const verifyPassword = comparePassword(password, user.password)
    if(verifyPassword){
      return user
    }
    return null
  } catch (error) {
    return null    
  }
}

// validar que el codigo funciona correctamente
// checkUserCredential('luis.rangel@academlo.com', 'root')
// .then(data => console.log(data))
// .catch(err => console.log(err)) 

module.exports = checkUserCredential


