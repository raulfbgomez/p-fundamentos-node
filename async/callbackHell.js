function saludar(nombre, callback) {
  setTimeout(function() {
    console.log(`Hola, ${nombre}`)
    callback(nombre)
  }, 1500)
}

function hablar(callbackHablar) {
  setTimeout(function() {
    console.log('Bla bla bla...')
    callbackHablar()
  }, 1000)
}

function adios(nombre, otroCallback) {
  setTimeout(function() {
    console.log(`Adios, ${nombre}`)
    otroCallback()
  }, 1500)
}

console.log('Iniciando proceso...')

// saludar('Juanito', function(nombre) {
//   hablar(function() {
//     hablar(function() {
//       hablar(function() {
//         adios(nombre, function() {
//           console.log('Terminando proceso...')
//         })
//       })
//     })
//   })
// })

// Refactorizando

function conversacion(nombre, veces, callback) {
  if (veces > 0)  {
    hablar(function() {
      conversacion(nombre, --veces, callback)
    })
  } else {
    adios(nombre, callback)
  }
}

saludar('Juanito', function(nombre) {
  conversacion(nombre, 3, function() {
    console.log('Proceso terminado.')
  })
})