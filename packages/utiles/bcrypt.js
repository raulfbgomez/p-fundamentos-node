const bcrypt = require('bcrypt')

const password = '1234segura!'

bcrypt.hash(password, 5, function(err, hash) {
  console.log(hash)
  bcrypt.compare('1234segura!', hash, function(err, res) {
    console.log(res)
  })
})