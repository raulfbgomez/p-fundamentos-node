
global.miVariable = 'Variable global'
let i = 1

let intervalo = setInterval(function() {
  console.log(i)
  if (i === 3) {
    clearInterval(intervalo)
  }
  i++
}, 1000)

setImmediate(function() {
  console.log('Hola que tal')
})

// console.log(process)
console.log(__dirname)
console.log(__filename)
console.log(miVariable)