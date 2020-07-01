// let buffer = Buffer.alloc(4) // Crea un buffer vacio
// let buffer = Buffer.from([1, 2, 3])
let buffer = Buffer.from('ABCD')

console.log(buffer)

let abc = Buffer.alloc(26)

for (let i = 0; i < 26; i++) {
  abc[i] = i + 65
}

console.log(abc.toString())