const os = require('os')

console.log(os.arch())
console.log(os.platform())
console.log(os.cpus().length)
// console.log(os.cpus())
console.log(os.constants) // Errores del SO

const SIZE = 1024

function kb(bytes) {
  return bytes / SIZE
}
function mb(bytes) {
  return kb(bytes) / SIZE
}
function gb(bytes) {
  return mb(bytes) / SIZE
}

let freeMemory = [
  {kb: kb(os.freemem()), mb: mb(os.freemem()), gb: gb(os.freemem())},
]

let totalMemory = [
  {kb: kb(os.totalmem()), mb: mb(os.totalmem()), gb: gb(os.totalmem())},
]
console.info('Free memory')
console.table(freeMemory)
console.info('Total Memory')
console.table(totalMemory)

// Directories

console.log(os.homedir())
console.log(os.tmpdir())
console.log(os.hostname())
console.log(os.networkInterfaces())

