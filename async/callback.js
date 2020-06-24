function saludar(nombre, callback) {
  setTimeout(function() {
    console.log(`Hola, ${nombre}`)
    callback(nombre)
  }, 1500)
}

function adios(nombre, otroCallback) {
  setTimeout(function() {
    console.log(`Adios, ${nombre}`)
    otroCallback()
  }, 1500)
}

console.log('Iniciando proceso...')

saludar('Juanito', function(nombre) {
  adios(nombre, function() {
    console.log('Terminando proceso...')
  })
})