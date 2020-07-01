let suma = 0
console.time('todo')
console.time('bucle')
for (let i = 0; i < 10000; i++) {
  suma += i
}
console.timeEnd('bucle')

let suma2 = 0
console.time('bucle2')
for (let j = 0; j < 100000; j++) {
  suma2 += j
}
console.timeEnd('bucle2')

function asincrona() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log('Termina el proceso asincrono')
      resolve()
    }, 1000)
  })
}

console.time('asincrona')
console.log('Empieza el proceso asincrono')
asincrona()
  .then(() => {
    console.timeEnd('asincrona')
  })

console.timeEnd('todo')