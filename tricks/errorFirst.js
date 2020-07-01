const { callbackify } = require("util")

function asincrona(callback) {
  setTimeout(function() {
    try {
      let a = 3 + i
      callback(null, a)
    } catch(err) {
      callback(err, null)
    }
  }, 1000)
}

asincrona(function(err, data) {
  if (err) {
    // throw err no sirve en las funciones asincronas
    console.error('Tenemos un error', err)
    return false
  }
  console.log('Todo OK', data)
})