function otraFuncion() {
  seRompe()
}
function seRompe() {
  return 3 + z
}

function seRompeAsincrona(cb) {
  setTimeout(function() {
    try { 
      return 4 + y
    } catch(err) {
      console.error(err)
      cb(err)
    }
  }, 1000)
}

try {
  // otraFuncion()
  seRompeAsincrona(function(err) {
    console.error('Ocurrio un error en la funcion asincrona', err)
    console.log('Ejecucion asincrona')
  })
} catch (err) {
  console.error(err.message)  
}

console.log('Se continua ejecutando mi aplicacion')