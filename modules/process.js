process.on('beforeExit', () => {
  console.log('El proceso va a terminar')
})

process.on('exit', () => {
  console.log('Proceso terminado')
})

// process.on('uncaughtRejection')
process.on('uncaughtException', (err, origen) => {
  console.error('No se ha capturado un error con try catch')
  console.error(err)
})


console.log(1 + g)