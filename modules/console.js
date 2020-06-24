console.log('Ver informacion')
console.info('Informacion')
console.error('Error')
console.warn('Ops! Algo ha pasado')
let tabla = [
  {a: 1, b: 'A'},
  {a: 2, b: 'B'},
]
console.table(tabla)

console.group('Conversacion de Developers: ')
console.log('Hola Mundo')
console.log('Bla bla bla')
console.log('Adios')
console.groupEnd('Conversacion de Developers: ')

console.group('Conversacion de Designers')
console.log('Colores')
console.groupEnd('Conversacion de Designers')

console.count('veces')
console.count('veces')
console.count('veces')
console.countReset('veces')
console.count('veces')
console.count('veces')