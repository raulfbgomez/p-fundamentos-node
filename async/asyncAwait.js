function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log(`Hola, ${nombre}`)
      resolve(nombre)
    }, 1500)
  })
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log('Bla bla bla...')
      resolve(nombre)
      // reject('No se puede hablar en este momento')
    }, 1000)
  })
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log(`Adios, ${nombre}`)
      resolve()
    }, 1500)
  })
}

async function main() {
  let nombre = await hola('Juanito')
  await hablar()
  await hablar()
  await hablar()
  await adios(nombre)
  console.log('Terminando....')
}

console.log('Inciando....')
main()